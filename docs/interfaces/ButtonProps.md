[@chelseaapps/react-native-elements](../README.md) / [Exports](../modules.md) / ButtonProps

# Interface: ButtonProps

## Hierarchy

- `ButtonElementProps`

  ↳ **`ButtonProps`**

## Table of contents

### Properties

- [accessibilityActions](ButtonProps.md#accessibilityactions)
- [accessibilityElementsHidden](ButtonProps.md#accessibilityelementshidden)
- [accessibilityHint](ButtonProps.md#accessibilityhint)
- [accessibilityIgnoresInvertColors](ButtonProps.md#accessibilityignoresinvertcolors)
- [accessibilityLabel](ButtonProps.md#accessibilitylabel)
- [accessibilityLiveRegion](ButtonProps.md#accessibilityliveregion)
- [accessibilityRole](ButtonProps.md#accessibilityrole)
- [accessibilityState](ButtonProps.md#accessibilitystate)
- [accessibilityValue](ButtonProps.md#accessibilityvalue)
- [accessibilityViewIsModal](ButtonProps.md#accessibilityviewismodal)
- [accessible](ButtonProps.md#accessible)
- [activeOpacity](ButtonProps.md#activeopacity)
- [children](ButtonProps.md#children)
- [delayLongPress](ButtonProps.md#delaylongpress)
- [delayPressIn](ButtonProps.md#delaypressin)
- [delayPressOut](ButtonProps.md#delaypressout)
- [disabled](ButtonProps.md#disabled)
- [hasTVPreferredFocus](ButtonProps.md#hastvpreferredfocus)
- [hitSlop](ButtonProps.md#hitslop)
- [icon](ButtonProps.md#icon)
- [importantForAccessibility](ButtonProps.md#importantforaccessibility)
- [nextFocusDown](ButtonProps.md#nextfocusdown)
- [nextFocusForward](ButtonProps.md#nextfocusforward)
- [nextFocusLeft](ButtonProps.md#nextfocusleft)
- [nextFocusRight](ButtonProps.md#nextfocusright)
- [nextFocusUp](ButtonProps.md#nextfocusup)
- [onAccessibilityAction](ButtonProps.md#onaccessibilityaction)
- [onAccessibilityEscape](ButtonProps.md#onaccessibilityescape)
- [onAccessibilityTap](ButtonProps.md#onaccessibilitytap)
- [onBlur](ButtonProps.md#onblur)
- [onFocus](ButtonProps.md#onfocus)
- [onLayout](ButtonProps.md#onlayout)
- [onLongPress](ButtonProps.md#onlongpress)
- [onMagicTap](ButtonProps.md#onmagictap)
- [onPress](ButtonProps.md#onpress)
- [onPressIn](ButtonProps.md#onpressin)
- [onPressOut](ButtonProps.md#onpressout)
- [pressRetentionOffset](ButtonProps.md#pressretentionoffset)
- [style](ButtonProps.md#style)
- [testID](ButtonProps.md#testid)
- [textStyle](ButtonProps.md#textstyle)
- [touchSoundDisabled](ButtonProps.md#touchsounddisabled)
- [tvParallaxProperties](ButtonProps.md#tvparallaxproperties)

## Properties

### accessibilityActions

• `Optional` **accessibilityActions**: readonly `Readonly`<`Object`\>[]

Provides an array of custom actions available for accessibility.

#### Inherited from

ButtonElementProps.accessibilityActions

#### Defined in

node_modules/@types/react-native/index.d.ts:2265

___

### accessibilityElementsHidden

• `Optional` **accessibilityElementsHidden**: `boolean`

A Boolean value indicating whether the accessibility elements contained within this accessibility element
are hidden to the screen reader.

**`platform`** ios

#### Inherited from

ButtonElementProps.accessibilityElementsHidden

#### Defined in

node_modules/@types/react-native/index.d.ts:2440

___

### accessibilityHint

• `Optional` **accessibilityHint**: `string`

An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label.

#### Inherited from

ButtonElementProps.accessibilityHint

#### Defined in

node_modules/@types/react-native/index.d.ts:2284

___

### accessibilityIgnoresInvertColors

• `Optional` **accessibilityIgnoresInvertColors**: `boolean`

https://reactnative.dev/docs/accessibility#accessibilityignoresinvertcolorsios

**`platform`** ios

#### Inherited from

ButtonElementProps.accessibilityIgnoresInvertColors

#### Defined in

node_modules/@types/react-native/index.d.ts:2470

___

### accessibilityLabel

• `Optional` **accessibilityLabel**: `string`

Overrides the text that's read by the screen reader when the user interacts with the element. By default, the
label is constructed by traversing all the children and accumulating all the Text nodes separated by space.

#### Inherited from

ButtonElementProps.accessibilityLabel

#### Defined in

node_modules/@types/react-native/index.d.ts:2271

___

### accessibilityLiveRegion

• `Optional` **accessibilityLiveRegion**: ``"none"`` \| ``"polite"`` \| ``"assertive"``

Indicates to accessibility services whether the user should be notified when this view changes.
Works for Android API >= 19 only.
See http://developer.android.com/reference/android/view/View.html#attr_android:accessibilityLiveRegion for references.

**`platform`** android

#### Inherited from

ButtonElementProps.accessibilityLiveRegion

#### Defined in

node_modules/@types/react-native/index.d.ts:2418

___

### accessibilityRole

• `Optional` **accessibilityRole**: `AccessibilityRole`

Accessibility Role tells a person using either VoiceOver on iOS or TalkBack on Android the type of element that is focused on.

#### Inherited from

ButtonElementProps.accessibilityRole

#### Defined in

node_modules/@types/react-native/index.d.ts:2276

___

### accessibilityState

• `Optional` **accessibilityState**: `AccessibilityState`

Accessibility State tells a person using either VoiceOver on iOS or TalkBack on Android the state of the element currently focused on.

#### Inherited from

ButtonElementProps.accessibilityState

#### Defined in

node_modules/@types/react-native/index.d.ts:2280

___

### accessibilityValue

• `Optional` **accessibilityValue**: `AccessibilityValue`

Represents the current value of a component. It can be a textual description of a component's value, or for range-based components, such as sliders and progress bars,
it contains range information (minimum, current, and maximum).

#### Inherited from

ButtonElementProps.accessibilityValue

#### Defined in

node_modules/@types/react-native/index.d.ts:2289

___

### accessibilityViewIsModal

• `Optional` **accessibilityViewIsModal**: `boolean`

A Boolean value indicating whether VoiceOver should ignore the elements within views that are siblings of the receiver.

**`platform`** ios

#### Inherited from

ButtonElementProps.accessibilityViewIsModal

#### Defined in

node_modules/@types/react-native/index.d.ts:2446

___

### accessible

• `Optional` **accessible**: `boolean`

When true, indicates that the view is an accessibility element.
By default, all the touchable elements are accessible.

#### Inherited from

ButtonElementProps.accessible

#### Defined in

node_modules/@types/react-native/index.d.ts:2260

___

### activeOpacity

• `Optional` **activeOpacity**: `number`

Determines what the opacity of the wrapped view should be when touch is active.
Defaults to 0.2

#### Inherited from

ButtonElementProps.activeOpacity

#### Defined in

node_modules/@types/react-native/index.d.ts:5209

___

### children

• `Optional` **children**: `ReactNode`

Text to show inside the button

#### Inherited from

ButtonElementProps.children

#### Defined in

[src/Button/index.tsx:15](https://github.com/chelsea-apps/react-native-elements/blob/f1e51d9/src/Button/index.tsx#L15)

___

### delayLongPress

• `Optional` **delayLongPress**: `number`

Delay in ms, from onPressIn, before onLongPress is called.

#### Inherited from

ButtonElementProps.delayLongPress

#### Defined in

node_modules/@types/react-native/index.d.ts:5058

___

### delayPressIn

• `Optional` **delayPressIn**: `number`

Delay in ms, from the start of the touch, before onPressIn is called.

#### Inherited from

ButtonElementProps.delayPressIn

#### Defined in

node_modules/@types/react-native/index.d.ts:5063

___

### delayPressOut

• `Optional` **delayPressOut**: `number`

Delay in ms, from the release of the touch, before onPressOut is called.

#### Inherited from

ButtonElementProps.delayPressOut

#### Defined in

node_modules/@types/react-native/index.d.ts:5068

___

### disabled

• `Optional` **disabled**: `boolean`

Clickable / Non Clickable button

#### Inherited from

ButtonElementProps.disabled

#### Defined in

[src/Button/index.tsx:21](https://github.com/chelsea-apps/react-native-elements/blob/f1e51d9/src/Button/index.tsx#L21)

___

### hasTVPreferredFocus

• `Optional` **hasTVPreferredFocus**: `boolean`

*(Apple TV only)* TV preferred focus (see documentation for the View component).

**`platform`** ios

#### Inherited from

ButtonElementProps.hasTVPreferredFocus

#### Defined in

node_modules/@types/react-native/index.d.ts:5272

___

### hitSlop

• `Optional` **hitSlop**: `Insets`

This defines how far your touch can start away from the button.
This is added to pressRetentionOffset when moving off of the button.
NOTE The touch area never extends past the parent view bounds and
the Z-index of sibling views always takes precedence if a touch hits
two overlapping views.

#### Inherited from

ButtonElementProps.hitSlop

#### Defined in

node_modules/@types/react-native/index.d.ts:5082

___

### icon

• `Optional` **icon**: `ReactNode`

Icon component, sits left to the text

#### Inherited from

ButtonElementProps.icon

#### Defined in

[src/Button/index.tsx:23](https://github.com/chelsea-apps/react-native-elements/blob/f1e51d9/src/Button/index.tsx#L23)

___

### importantForAccessibility

• `Optional` **importantForAccessibility**: ``"auto"`` \| ``"yes"`` \| ``"no"`` \| ``"no-hide-descendants"``

Controls how view is important for accessibility which is if it fires accessibility events
and if it is reported to accessibility services that query the screen.
Works for Android only. See http://developer.android.com/reference/android/R.attr.html#importantForAccessibility for references.

Possible values:
     'auto' - The system determines whether the view is important for accessibility - default (recommended).
     'yes' - The view is important for accessibility.
     'no' - The view is not important for accessibility.
     'no-hide-descendants' - The view is not important for accessibility, nor are any of its descendant views.

#### Inherited from

ButtonElementProps.importantForAccessibility

#### Defined in

node_modules/@types/react-native/index.d.ts:2431

___

### nextFocusDown

• `Optional` **nextFocusDown**: `number`

Designates the next view to receive focus when the user navigates down. See the Android documentation.

**`platform`** android

#### Inherited from

ButtonElementProps.nextFocusDown

#### Defined in

node_modules/@types/react-native/index.d.ts:5279

___

### nextFocusForward

• `Optional` **nextFocusForward**: `number`

Designates the next view to receive focus when the user navigates forward. See the Android documentation.

**`platform`** android

#### Inherited from

ButtonElementProps.nextFocusForward

#### Defined in

node_modules/@types/react-native/index.d.ts:5286

___

### nextFocusLeft

• `Optional` **nextFocusLeft**: `number`

Designates the next view to receive focus when the user navigates left. See the Android documentation.

**`platform`** android

#### Inherited from

ButtonElementProps.nextFocusLeft

#### Defined in

node_modules/@types/react-native/index.d.ts:5293

___

### nextFocusRight

• `Optional` **nextFocusRight**: `number`

Designates the next view to receive focus when the user navigates right. See the Android documentation.

**`platform`** android

#### Inherited from

ButtonElementProps.nextFocusRight

#### Defined in

node_modules/@types/react-native/index.d.ts:5300

___

### nextFocusUp

• `Optional` **nextFocusUp**: `number`

Designates the next view to receive focus when the user navigates up. See the Android documentation.

**`platform`** android

#### Inherited from

ButtonElementProps.nextFocusUp

#### Defined in

node_modules/@types/react-native/index.d.ts:5307

___

### onAccessibilityAction

• `Optional` **onAccessibilityAction**: (`event`: `AccessibilityActionEvent`) => `void`

#### Type declaration

▸ (`event`): `void`

When `accessible` is true, the system will try to invoke this function when the user performs an accessibility custom action.

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `AccessibilityActionEvent` |

##### Returns

`void`

#### Inherited from

ButtonElementProps.onAccessibilityAction

#### Defined in

node_modules/@types/react-native/index.d.ts:2294

___

### onAccessibilityEscape

• `Optional` **onAccessibilityEscape**: () => `void`

#### Type declaration

▸ (): `void`

When accessibile is true, the system will invoke this function when the user performs the escape gesture (scrub with two fingers).

**`platform`** ios

##### Returns

`void`

#### Inherited from

ButtonElementProps.onAccessibilityEscape

#### Defined in

node_modules/@types/react-native/index.d.ts:2452

___

### onAccessibilityTap

• `Optional` **onAccessibilityTap**: () => `void`

#### Type declaration

▸ (): `void`

When `accessible` is true, the system will try to invoke this function when the user performs accessibility tap gesture.

**`platform`** ios

##### Returns

`void`

#### Inherited from

ButtonElementProps.onAccessibilityTap

#### Defined in

node_modules/@types/react-native/index.d.ts:2458

___

### onBlur

• `Optional` **onBlur**: (`e`: `NativeSyntheticEvent`<`TargetedEvent`\>) => `void`

#### Type declaration

▸ (`e`): `void`

When `accessible` is true (which is the default) this may be called when
the OS-specific concept of "blur" occurs, meaning the element lost focus.
Some platforms may not have the concept of blur.

##### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `NativeSyntheticEvent`<`TargetedEvent`\> |

##### Returns

`void`

#### Inherited from

ButtonElementProps.onBlur

#### Defined in

node_modules/@types/react-native/index.d.ts:5089

___

### onFocus

• `Optional` **onFocus**: (`e`: `NativeSyntheticEvent`<`TargetedEvent`\>) => `void`

#### Type declaration

▸ (`e`): `void`

When `accessible` is true (which is the default) this may be called when
the OS-specific concept of "focus" occurs. Some platforms may not have
the concept of focus.

##### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `NativeSyntheticEvent`<`TargetedEvent`\> |

##### Returns

`void`

#### Inherited from

ButtonElementProps.onFocus

#### Defined in

node_modules/@types/react-native/index.d.ts:5096

___

### onLayout

• `Optional` **onLayout**: (`event`: `LayoutChangeEvent`) => `void`

#### Type declaration

▸ (`event`): `void`

Invoked on mount and layout changes with
{nativeEvent: {layout: {x, y, width, height}}}

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `LayoutChangeEvent` |

##### Returns

`void`

#### Inherited from

ButtonElementProps.onLayout

#### Defined in

node_modules/@types/react-native/index.d.ts:5102

___

### onLongPress

• `Optional` **onLongPress**: (`event`: `GestureResponderEvent`) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `GestureResponderEvent` |

##### Returns

`void`

#### Inherited from

ButtonElementProps.onLongPress

#### Defined in

node_modules/@types/react-native/index.d.ts:5104

___

### onMagicTap

• `Optional` **onMagicTap**: () => `void`

#### Type declaration

▸ (): `void`

When accessible is true, the system will invoke this function when the user performs the magic tap gesture.

**`platform`** ios

##### Returns

`void`

#### Inherited from

ButtonElementProps.onMagicTap

#### Defined in

node_modules/@types/react-native/index.d.ts:2464

___

### onPress

• `Optional` **onPress**: (`event`: `GestureResponderEvent`) => `void`

#### Type declaration

▸ (`event`): `void`

Called when the touch is released,
but not if cancelled (e.g. by a scroll that steals the responder lock).

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `GestureResponderEvent` |

##### Returns

`void`

#### Inherited from

ButtonElementProps.onPress

#### Defined in

node_modules/@types/react-native/index.d.ts:5110

___

### onPressIn

• `Optional` **onPressIn**: (`event`: `GestureResponderEvent`) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `GestureResponderEvent` |

##### Returns

`void`

#### Inherited from

ButtonElementProps.onPressIn

#### Defined in

node_modules/@types/react-native/index.d.ts:5112

___

### onPressOut

• `Optional` **onPressOut**: (`event`: `GestureResponderEvent`) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `GestureResponderEvent` |

##### Returns

`void`

#### Inherited from

ButtonElementProps.onPressOut

#### Defined in

node_modules/@types/react-native/index.d.ts:5114

___

### pressRetentionOffset

• `Optional` **pressRetentionOffset**: `Insets`

When the scroll view is disabled, this defines how far your
touch may move off of the button, before deactivating the button.
Once deactivated, try moving it back and you'll see that the button
is once again reactivated! Move it back and forth several times
while the scroll view is disabled. Ensure you pass in a constant
to reduce memory allocations.

#### Inherited from

ButtonElementProps.pressRetentionOffset

#### Defined in

node_modules/@types/react-native/index.d.ts:5129

___

### style

• `Optional` **style**: `StyleProp`<`ViewStyle`\>

Tailwind styling -> TouchableOpacity Container

#### Inherited from

ButtonElementProps.style

#### Defined in

[src/Button/index.tsx:17](https://github.com/chelsea-apps/react-native-elements/blob/f1e51d9/src/Button/index.tsx#L17)

___

### testID

• `Optional` **testID**: `string`

Used to locate this view in end-to-end tests.

#### Inherited from

ButtonElementProps.testID

#### Defined in

node_modules/@types/react-native/index.d.ts:5134

___

### textStyle

• `Optional` **textStyle**: `StyleProp`<`TextStyle`\>

Tailwind Styling -> Txt Component

#### Inherited from

ButtonElementProps.textStyle

#### Defined in

[src/Button/index.tsx:19](https://github.com/chelsea-apps/react-native-elements/blob/f1e51d9/src/Button/index.tsx#L19)

___

### touchSoundDisabled

• `Optional` **touchSoundDisabled**: ``null`` \| `boolean`

If true, doesn't play a system sound on touch.

**`platform`** android

#### Inherited from

ButtonElementProps.touchSoundDisabled

#### Defined in

node_modules/@types/react-native/index.d.ts:5043

___

### tvParallaxProperties

• `Optional` **tvParallaxProperties**: `TVParallaxProperties`

*(Apple TV only)* Object with properties to control Apple TV parallax effects.

enabled: If true, parallax effects are enabled.  Defaults to true.
shiftDistanceX: Defaults to 2.0.
shiftDistanceY: Defaults to 2.0.
tiltAngle: Defaults to 0.05.
magnification: Defaults to 1.0.
pressMagnification: Defaults to 1.0.
pressDuration: Defaults to 0.3.
pressDelay: Defaults to 0.0.

**`platform`** android

#### Inherited from

ButtonElementProps.tvParallaxProperties

#### Defined in

node_modules/@types/react-native/index.d.ts:5225