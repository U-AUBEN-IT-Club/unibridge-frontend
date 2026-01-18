
import Hero from '@/components/Hero';
import Features from '@/components/Features';

/**
 * PAGE D'ACCUEIL (Home/page.jsx)
 * 
 * C'est la page principale. Elle assemble les composants Hero (le titre) 
 * et Features (les fonctionnalités) pour créer le contenu de l'accueil.
 */
function Home() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            <main>
                {/* On affiche le haut de page (Hero) */}
                <Hero />

                {/* On affiche la liste des points forts (Features) */}
                <Features />
            </main>
        </div>
    )
}

export default Home;