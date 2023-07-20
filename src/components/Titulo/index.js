import React from 'react'
import styles from './Titulo.module.css'

// A props.children (propriedade filha) é uma propriedade especial do 
// React que contém qualquer elemento filho definido no componente. 
// Ela é usada para exibir o que você inclui entre as tags de abertura 
// e fechamento ao chamar um componente.

export default function Titulo({ children }) {
  return (
    <div className={styles.texto}>
        {children}
    </div>
  )
}
