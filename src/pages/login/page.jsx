import LoginForm from "@/components/login/loginForm";

/**
 * PAGE DE CONNEXION (Login/page.jsx)
 * 
 * Une page simple qui se contente d'afficher le composant LoginForm.
 * On utilise cette structure pour garder le code propre et organisé.
 */
function Login() {
    return (
        <div className="py-20 bg-slate-50">
            {/* On appelle le composant qui contient le vrai code du formulaire */}
            <LoginForm />
        </div>
    )
}

export default Login;