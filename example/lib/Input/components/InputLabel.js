import React, { useEffect } from 'react';
import { Animated } from 'react-native';
import { t } from 'react-native-tailwindcss';
import OptionalWrapper from '../../Wrapper/OptionalWrapper';
import useInputAnimations from '../hooks/useInputAnimations';
const styles = {
    label: [
        t.textGray400,
        t.fontSans,
        t.absolute,
        t.textBase,
        t.top0,
        t.left0,
        t.mL4,
        t.mT4,
        t.textBase,
        { zIndex: 1 },
    ],
};
const InputLabel = ({ text, isFocused, value, currentValue, labelStyle, labelTopPosition, labelBigFontSize, labelSmallFontSize, labelColor, focusedLabelColor, testID, }) => {
    const { animatedLabel, fadeIn, fadeOut } = useInputAnimations(value !== null && value !== void 0 ? value : '', labelTopPosition, labelBigFontSize, labelSmallFontSize);
    useEffect(() => (isFocused || value ? fadeIn() : fadeOut()), [isFocused, fadeIn, value, fadeOut]);
    return (React.createElement(OptionalWrapper, { data: text },
        React.createElement(Animated.Text, { style: [
                styles.label,
                { ...animatedLabel },
                {
                    color: currentValue || value || isFocused
                        ? focusedLabelColor
                        : labelColor,
                },
                labelStyle,
            ], testID: testID }, text)));
};
export default InputLabel;
//# sourceMappingURL=InputLabel.js.map