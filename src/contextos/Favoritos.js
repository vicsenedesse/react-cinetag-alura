import { createContext, useState, useContext } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({ children }) {
    //o useState é um Hook que te permite adicionar um estado a um componente de função. 
    //Esse hook é inicializado com duas variáveis: a primeira, 
    //que é o valor atual do estado, e a segunda que atualiza o valor.
    // Esta sintaxe com colchetes é chamada de “atribuição via desestruturação”. 
    // Com isso, estamos criando duas variáveis ao mesmo tempo, a favoritos e a setFavoritos., 
    // onde favoritos é definido para o primeiro valor retornado por useState, e setFavoritos é o segundo.
    const [favorito, setFavorito] = useState([]);

    return (
        <FavoritosContext.Provider
        value={{favorito, setFavorito }}>
            {children}
        </FavoritosContext.Provider>
    )
}

export function useFavoritoContext(){
    const { favorito, setFavorito } = useContext(FavoritosContext);

    function adicionarFavorito(novoFavorito) {
        const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id)

        let novaLista = [...favorito];

        if(!favoritoRepetido) {
            novaLista.push(novoFavorito);
            return setFavorito(novaLista);
        }

        novaLista.splice(novaLista.indexOf(novoFavorito), 1);
        return setFavorito(novaLista);
    }
    return {
        favorito,
        adicionarFavorito
    }
}