---
order: 4
nav:
  title: 指南
group:
  title: 进阶
---

# 权限管理

权限控制是中后台系统中常见的需求之一，你可以利用我们提供 umi 插件 [@alitajs/umi-plugin-authority](https://github.com/alitajs/umi-plugins/tree/master/packages/umi-plugin-authority) 来实现权限控制功能

> 该插件基于umi@3开发

## 启用

有 `src/authority.ts` 时启用。

## 介绍

我们约定了 `src/authority.ts` 为我们的权限定义文件，该文件需要默认导出一个方法，导出的方法会在项目初始化时被执行。该方法需要返回一个对象，对象返回实例化 [Policy](https://github.com/pansyjs/utils/tree/master/packages/policy) 所需数据。

数据格式如下:

```ts
{
  actions?: {
    module: string;
    action: string;
  }[];
  policies?: {
    version: number;
    statement: {
      effect: 'allow' | 'deny';
      action: '*' | string[];
    }[];
  }[];
  separator?: '/' | ':';
}
```

示例如下:

```ts | pure
import { AuthorityConfigFun } from 'umi';

const authConfig: AuthorityConfigFun = (initialState: any) => {
  return {
    actions: [
      { module: 'module1', action: 'action1' },
      { module: 'module1', action: 'action2' },
      { module: 'module1', action: 'action3' },
      { module: 'module2', action: 'action1' },
      { module: 'module2', action: 'action2' },
    ],
    policies: [
      {
        version: 1,
        statement: [
          {
            effect: 'allow',
            action: 'module1:*'
          }
        ]
      }
    ],
    separator: ':'
  };
}

export default authConfig;
```

## 配置

配合 Layout 插件你可以很简单是实现针对某些页面的权限控制。如下所示，只有拥有了 `module1:action5` 权限，用户才可以访问该页面。否则会默认渲染 Layout 插件内置的权限错误页面。

```ts
// config/route.ts
export const routes =  [
  {
    path: '/pageA',
    component: 'PageA',
    authority: 'module1:action5'
  }
]
```

### authority

- Type: `string`

对应的权限code。

## API

### useAuthority

我们提供了一个 Hooks 用于在组件中提供权限验证功能，如下所示：

提供[Policy](https://github.com/pansyjs/utils/tree/master/packages/policy)所有的能力。

```tsx | pure
import React from 'react';
import { useAuthority } from 'umi';

const Example = props => {
  const { foo } = props;
  const { combinationVerify, multipleVerify } = useAuthority();
 
  if (combinationVerify('module1:action5')) {
    // code
  }

  if (multipleVerify(['module1:action1', 'module1:action2'])) {
    // code
  }
 
  return <>TODO</>;
};

export default Example;
```

### Authority

可以在业务组件中使用组件 `<Authority />` 对应用进行权限控制了。 组件 Authority 支持的属性如下：

#### access

- Type: `string`

权限code，支持 `!`、`||`、`&&`逻辑运算符号。 例如 `'(module1:action1 && module1:action2) || module1:action3'`

#### accessible

- Type: `boolean`

是否有权限，通常通过 useAccess 获取后传入进来。

#### fallback

- Type: `React.ReactNode`

无权限时的显示，默认无权限不显示任何内容。

#### children

- Type: `React.ReactNode`

有权限时的显示。

示例如下：

```tsx | pure
import React from 'react';
import { useAuthority, Authority } from 'umi';

const Example = () => {
  const { combinationVerify, multipleVerify } = useAuthority(); // access 的成员: canReadFoo, canUpdateFoo, canDeleteFoo
 
  if (multipleVerify(['module1:action1', 'module1:action2'])) {
    // code
  }
 
  return (
    <div>
      <Authority access="module5:action1" fallback="权限不通过">
        <span>无权限</span>
      </Authority>

      // 可配合 useAuthority 使用
      <Authority
        accessible={multipleVerify(['module1:action1'])}
      >
        {(isMatch: boolean) => <span>权限校验结果: {isMatch + ''}</span>}
      </Authority>
    </div>
  );
};

export default Example;
```
