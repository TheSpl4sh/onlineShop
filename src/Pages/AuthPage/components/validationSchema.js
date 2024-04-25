import * as Yup from "yup";

export const validationSchema = Yup.object({
    email: Yup.string()
        .required("* Поле Email обов'язкове")
        .email("Введіть валідний email"),

    password: Yup.string()
        .required("* Поле Пароль обов'язкове")
        .matches(
            /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{5,}$/,
            "Пароль повинен містити одну букву, одну цифру і має бути довжиною 5 символів або більше"
        ),
});
