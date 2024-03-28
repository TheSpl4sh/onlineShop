import * as Yup from "yup";

export const validationSchema = Yup.object({
    email: Yup.string()
        .required("* Обов'язкове поле")
        .email("Введіть валідний email"),

    firstName: Yup.string()
        .matches(
            /^[a-zA-Zа-яА-ЯїЇіІєЄ]+$/,
            "* Ім'я повинно містити тільки букви"
        )
        .required("* Обов'язкове поле"),

    lastName: Yup.string()
        .matches(
            /^[a-zA-Zа-яА-ЯїЇіІєЄ]+$/,
            "* Прізвище повинно містити тільки букви"
        )
        .required("* Обов'язкове поле"),

    telephone: Yup.string().required("* Обов'язкове поле"),

    password: Yup.string()
        .required("* Обов'язкове поле")
        .matches(
            /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{5,}$/,
            "* Пароль повинен містити одну букву, одну цифру і має бути довжиною 5 символів або більше"
        ),

    confirmPassword: Yup.string()
        .required("* Обов'язкове поле")
        .oneOf([Yup.ref("password"), null], "* Паролі повинні співпадати"),

    agreeToPrivacyPolicy: Yup.boolean().oneOf(
        [true],
        "* Потрібно погодитись на обробку персональних даних"
    ),
});
