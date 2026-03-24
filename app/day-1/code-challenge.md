#### Répondre au QUIZ ####

1) - Que se passe-t-il si tu utilises useState dans un Server Component ? 
     ===> useState ne fonctionne pas dans server component: les server components sont exécutés uniquement coté serveur, pendant le rendu initial.

    ❗ Résultat exact si tu utilises useState dans un Server Component:
        Error: You're importing a component that needs `useState`. This React Hook only works in a Client Component. To fix, mark the file (or its parent) with the `"use client"` directive.

    ❗ Pourquoi c’est impossible techniquement ?
        1- le serveur ne garde pas l'état:
            - il renvoie HTML terminé
            - n'a pas de cycle de vie
            - ne peut pas réagir à des événement utilisateur
          Donc il n'a aucun endroit pour stocker l'état durable, chaque requete est fraiche.
        2- useState nécessite du javascript dans le navigateur:
           - pour que useState fonctionne il faut:
                -- du code JS chargé dans le navigateur
                -- un system d'events
                -- un rerender au suite de useState

    👍 Solution : transformer en Client Component
        Il suffit d’ajouter "use client"

        Exemple:
        
            "use client";

            import { useState } from "react";

            export default function Counter() {
                const [count, setCount] = useState(0);

                return <button onClick={() => setCount(c => c + 1)}>
                    {count}
                </button>;
            }

2- Quelle est la différence entre layout.tsx et template.tsx ?
  ==> Layout:
     - s'execute une seule fois
     - persiste entre différentes navigations
     - conserve son state, son context.
     - est idéal pour tous ce que ne doit pas etre recrée comme (Navbar, footer, sidebar)
  ==> Template:
     - Recrée à chaque navigation
     - son state est rénitialisé
     - parfait pour les transitions, les animations, effet d'entrée ...
        (si tu veux une animation quand la page change, 
         si tu veux réinitialiser un formulaire quand tu changes de route
         etc 
        )