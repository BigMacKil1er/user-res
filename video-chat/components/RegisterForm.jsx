import { getUser } from "../api/createUser";

export default function RegisterForm(){
    function submitFormRegistration(e) {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const formJson = Object.fromEntries(formData.entries());

        const someData = {
            "email": "regina.khabibullina.99@list.ru",
            "password": "reg123456789ina",
            "username": "Regina",
            "phone": "+79108733152",
            "captchaToken": "string",
            "utm_source": "some_social_network",
            "utm_medium": "paid_ads",
            "utm_campaign": "tech_sale",
            "utm_content": "blog_post",
            "utm_term": "conference_systems",
            "meta": {}
          }
        
        formJson.captchaToken = '03AGdBq253bDuj8_gznAi46SF2Z_1CDY5Zz-PIQwC7wYL3tMS0XsqvI2HOaecMaFM25kFEjwJPj4LeQ3lYl37Zg6vvNq_guSO9_8uMPvKIKu-wrcC3mnnS'
        console.log(formJson);
        getUser(someData)
    }
    return (
        <form className="df-column gap-10" action="" method="post" onSubmit={submitFormRegistration}>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />
            
            <label for="password">Пароль:</label>
            <input type="password" id="password" name="password" required />

            <label for="username">Имя пользователя:</label>
            <input type="text" id="username" name="username" required />

            <label for="phone">Телефон:</label>
            <input type="tel" id="phone" name="phone" required />

            <input type="submit" value="Отправить" ></input>
        </form>
    )
}