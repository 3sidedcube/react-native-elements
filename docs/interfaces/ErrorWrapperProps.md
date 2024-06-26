[@chelseaapps/react-native-elements](../README.md) / [Exports](../modules.md) / ErrorWrapperProps

# Interface: ErrorWrapperProps

## Hierarchy

- `ErrorWrapperElementProps`

  ↳ **`ErrorWrapperProps`**

## Table of contents

### Properties

- [children](ErrorWrapperProps.md#children)
- [error](ErrorWrapperProps.md#error)
- [show](ErrorWrapperProps.md#show)
- [style](ErrorWrapperProps.md#style)
- [textStyle](ErrorWrapperProps.md#textstyle)
- [title](ErrorWrapperProps.md#title)

### Methods

- [onClose](ErrorWrapperProps.md#onclose)

## Properties

### children

• **children**: `ReactNode`

The rest of the page elements

#### Inherited from

ErrorWrapperElementProps.children

#### Defined in

[src/Wrapper/ErrorWrapper.tsx:17](https://github.com/chelsea-apps/react-native-elements/blob/48c9f3e/src/Wrapper/ErrorWrapper.tsx#L17)

___

### error

• `Optional` **error**: `CombinedError`

URQL Error

#### Inherited from

ErrorWrapperElementProps.error

#### Defined in

[src/Wrapper/ErrorWrapper.tsx:15](https://github.com/chelsea-apps/react-native-elements/blob/48c9f3e/src/Wrapper/ErrorWrapper.tsx#L15)

___

### show

• `Optional` **show**: `boolean`

If false, the component will not be displayed

#### Inherited from

ErrorWrapperElementProps.show

#### Defined in

[src/Wrapper/ErrorWrapper.tsx:25](https://github.com/chelsea-apps/react-native-elements/blob/48c9f3e/src/Wrapper/ErrorWrapper.tsx#L25)

___

### style

• `Optional` **style**: `StyleProp`<`ViewStyle`\>

Container style

#### Inherited from

ErrorWrapperElementProps.style

#### Defined in

[src/Wrapper/ErrorWrapper.tsx:21](https://github.com/chelsea-apps/react-native-elements/blob/48c9f3e/src/Wrapper/ErrorWrapper.tsx#L21)

___

### textStyle

• `Optional` **textStyle**: `StyleProp`<`TextStyle`\>

Text style

#### Inherited from

ErrorWrapperElementProps.textStyle

#### Defined in

[src/Wrapper/ErrorWrapper.tsx:23](https://github.com/chelsea-apps/react-native-elements/blob/48c9f3e/src/Wrapper/ErrorWrapper.tsx#L23)

___

### title

• **title**: `string`

Error name

#### Inherited from

ErrorWrapperElementProps.title

#### Defined in

[src/Wrapper/ErrorWrapper.tsx:13](https://github.com/chelsea-apps/react-native-elements/blob/48c9f3e/src/Wrapper/ErrorWrapper.tsx#L13)

## Methods

### onClose

▸ `Optional` **onClose**(): `void`

Action to be take on closing the error

#### Returns

`void`

#### Inherited from

ErrorWrapperElementProps.onClose

#### Defined in

[src/Wrapper/ErrorWrapper.tsx:19](https://github.com/chelsea-apps/react-native-elements/blob/48c9f3e/src/Wrapper/ErrorWrapper.tsx#L19)
