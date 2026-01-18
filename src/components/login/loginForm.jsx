/**
 * FORMULAIRE DE CONNEXION (loginForm.jsx)
 * 
 * Un composant simple pour la connexion utilisateur.
 * Note : Pour l'instant, c'est un design statique (les boutons ne font rien encore).
 */
export default function LoginForm() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            <main>
                <h1 className="text-2xl font-bold text-center mt-10">Connexion à UniBridge</h1>

                <div className="flex justify-center mt-10">
                    <form className="w-full max-w-md bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                        {/* Champ Identifiant */}
                        <div className="mb-4">
                            <label className="block text-slate-700 text-sm font-bold mb-2" htmlFor="username">
                                Nom d'utilisateur
                            </label>
                            <input
                                className="shadow-sm appearance-none border border-slate-300 rounded-lg w-full py-3 px-4 text-slate-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                                id="username"
                                type="text"
                                placeholder="votre_nom"
                            />
                        </div>

                        {/* Champ Mot de passe */}
                        <div className="mb-6">
                            <label className="block text-slate-700 text-sm font-bold mb-2" htmlFor="password">
                                Mot de passe
                            </label>
                            <input
                                className="shadow-sm appearance-none border border-slate-300 rounded-lg w-full py-3 px-4 text-slate-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                                id="password"
                                type="password"
                                placeholder="********"
                            />
                        </div>

                        {/* Bouton de validation */}
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg focus:outline-none transition-colors"
                                type="button"
                            >
                                Se connecter
                            </button>
                            <a className="inline-block align-baseline font-bold text-sm text-blue-600 hover:text-blue-800" href="#">
                                Mot de passe oublié ?
                            </a>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}