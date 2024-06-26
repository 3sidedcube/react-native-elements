import { CombinedError } from '@urql/core';
import React, { LegacyRef, useContext } from 'react';
import { Control, UseFormHandleSubmit, UseFormSetValue } from 'react-hook-form';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { color, t } from 'react-native-tailwindcss';
import { FieldsErrors, InputValidations } from '../../../../../../lib';
import DefaultButton from '../../../../../common/components/elements/Button/Default';
import OutlineButton from '../../../../../common/components/elements/Button/Outline';
import DropdownLink from '../../../../../common/components/elements/DropdownLink';
import Icon from '../../../../../common/components/elements/Icon';
import Input from '../../../../../common/components/elements/Input';
import InputPressable from '../../../../../common/components/elements/InputPressable';
import SwitchRow from '../../../../../common/components/elements/SwitchRow';
import Textarea from '../../../../../common/components/elements/Textarea';
import TextareaLink from '../../../../../common/components/elements/TextareaLink';
import Txt from '../../../../../common/components/elements/Txt';
import ErrorWrapper from '../../../../../common/components/elements/Wrapper/ErrorWrapper';
import useDropdown from '../../../../../common/hooks/useDropdown';
import useSwitch from '../../../../../common/hooks/useSwitch';
import { MainContext } from '../../../main.provider';

export type ElementsFormData = {
	notEditable?: string;
	email: string;
	price: string;
	days: string;
	description: string;
	bio: string;
	country: string;
	fruits: string;
};

type ElementsFormProps = {
	setValue: UseFormSetValue<ElementsFormData>;
	control: Control<ElementsFormData>;
	handleSubmit: UseFormHandleSubmit<ElementsFormData>;
	errors: FieldsErrors;
	handleSaveData: (data: ElementsFormData) => void;
};

const ElementsForm = ({
	setValue,
	errors,
	control,
	handleSubmit,
	handleSaveData,
}: ElementsFormProps) => {
	const { dropdown: locationDropdown, setDropdown: setLocationDropdown } =
		useDropdown({
			type: 'single',
			name: 'country',
			label: 'Single Dropdown Link',
			items: [
				{ value: 'uk', label: 'United Kingdom' },
				{ value: 'ro', label: 'Romania' },
				{ value: 'it', label: 'Italy' },
			],
			currentValues: undefined,
		});

	const { dropdown: fruitsDropdown, setDropdown: setFruitsDropdown } =
		useDropdown({
			type: 'multiple',
			name: 'fruits',
			label: 'Multiple Dropdown Link',
			items: [
				{ value: 'apple', label: 'Apple' },
				{ value: 'grapefruit', label: 'Grapefruit' },
				{ value: 'kiwi', label: 'Kiwi' },
			],
			currentValues: undefined,
		});

	const { active: notificationActive, setActive: setNotificationsActive } =
		useSwitch(false);

	/**
	 * Modal Data
	 */
	const { setModalContent, setModalOpen } = useContext(MainContext);

	const handleOpenModal = () => {
		setModalContent(
			<View>
				<Txt style={[t.textCenter, t.textBlack, t.mT6, t.mB8]}>
					Modal Content
				</Txt>
			</View>,
		);
		setModalOpen(true);
	};

	const validation: InputValidations<ElementsFormData> = {
		email: {
			required: {
				value: true,
				message: 'Email is required.',
			},
			pattern: {
				value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				message: 'You must use a valid email address.',
			},
		},
		price: {
			required: {
				value: true,
				message: 'Price is required.',
			},
		},
		days: {
			required: {
				value: true,
				message: 'You need to include the number of days.',
			},
		},
		description: {
			required: {
				value: true,
				message: 'Minimum of 8 characters.',
			},
			minLength: {
				value: 8,
				message: 'Minimum of 8 characters.',
			},
		},
		bio: {
			required: {
				value: true,
				message: 'Minimum of 8 characters.',
			},
			minLength: {
				value: 8,
				message: 'Minimum of 8 characters.',
			},
		},
		country: {
			required: {
				value: true,
				message: 'You need to select a country.',
			},
		},
		fruits: {
			required: {
				value: true,
				message: 'You need to select at least one item.',
			},
		},
	};

	const Ref = React.createRef<LegacyRef<TextInput>>();

	return (
		<View style={[t.wFull]}>
			<Input
				name="notEditable"
				label="This input is not editable"
				defaultValue="10"
				prefix="£"
				editable={false}
				control={control}
				clearTextIcon={<Txt>X</Txt>}
				clearTextIconContainerStyle={[
					t.bgGray200,
					t.w6,
					t.h6,
					{ borderRadius: 13, marginTop: 22 },
				]}
			/>
			<Input
				name="email"
				label="Input"
				control={control}
				error={errors.email}
				validation={validation.email}
				ref={Ref}
			/>
			<Input
				name="email"
				label="Input with right component"
				control={control}
				error={errors.email}
				validation={validation.email}
				forceLabel
				rightComponent={
					<TouchableOpacity
						style={[
							t.w10,
							t.h10,
							t.justifyCenter,
							t.itemsCenter,
							t.bgYellow400,
							t.roundedFull,
						]}
					>
						<Icon
							type="font"
							fontName="Feather"
							name="chevron-right"
							color={color.gray900}
							size={22}
						/>
					</TouchableOpacity>
				}
			/>
			<Input
				name="price"
				label="Input with prefix"
				control={control}
				error={errors.price}
				validation={validation.price}
				prefix="$"
				forceLabel
			/>
			<Input
				name="name"
				label="Name"
				control={control}
				error={errors.price}
				validation={validation.price}
				forceLabel
				clearTextIcon={
					<Icon
						type="font"
						fontName="Feather"
						name="x"
						color={color.gray700}
						size={18}
					/>
				}
				clearTextIconContainerStyle={[
					t.bgGray200,
					t.w6,
					t.h6,
					{ borderRadius: 13 },
				]}
				noClear
			/>
			<Input
				name="days"
				label="Input with postfix"
				control={control}
				error={errors.days}
				validation={validation.days}
				postfix="days"
				forceLabel
			/>
			<InputPressable
				label="Pressable Input"
				value="vladbbr1@gmail.com"
				onPress={() => console.log('hello')}
			/>
			<Textarea
				name="description"
				label="Expandable Textarea"
				control={control}
				error={errors.description}
				validation={validation.description}
				autoFocus
			/>
			<TextareaLink
				name="bio"
				label="Textarea Link"
				control={control}
				validation={validation.bio}
				error={errors.bio}
				setValue={setValue}
			/>
			<DropdownLink
				dropdown={locationDropdown}
				setDropdown={setLocationDropdown}
				control={control}
				setValue={setValue}
				validation={validation.country}
				error={errors.country}
				clearComponentVisible
			/>
			<DropdownLink
				dropdown={fruitsDropdown}
				setDropdown={setFruitsDropdown}
				control={control}
				setValue={setValue}
				validation={validation.fruits}
				error={errors.fruits}
			/>
			<SwitchRow
				active={notificationActive}
				setActive={setNotificationsActive}
				label="Notifications enabled"
				// toggleOnSwitchOnly
			/>
			<ErrorWrapper
				title="Something went wrong!"
				error={
					new CombinedError({
						graphQLErrors: [{ message: 'Something went wrong!' }],
					})
				}
				show
			>
				<Txt>You wont see this</Txt>
			</ErrorWrapper>
			<OutlineButton onPress={handleOpenModal} style={[t.mB8]}>
				Open Modal
			</OutlineButton>
			<DefaultButton
				onPress={handleSubmit(handleSaveData)}
				style={[t.mB8]}
			>
				Submit
			</DefaultButton>
		</View>
	);
};

export default ElementsForm;
