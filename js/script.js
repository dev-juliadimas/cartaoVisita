document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o link de e-mail usando a classe 'email-link'
    const emailLink = document.querySelector('.email-link');
    
    // Adiciona um listener para o clique no link de E-mail
    if (emailLink) {
        emailLink.addEventListener('click', (event) => {
            // Previne a ação padrão (abrir o cliente de e-mail)
            event.preventDefault(); 
            
            // Extrai o endereço de e-mail
            // Pega o valor do href e remove o 'mailto:'
            const emailAddress = emailLink.href.replace('mailto:', '');

            // Usa a API Clipboard para copiar o texto (funciona na maioria dos navegadores)
            navigator.clipboard.writeText(emailAddress).then(() => {
                alert(`E-mail copiado para a área de transferência: ${emailAddress}`);
            }).catch(err => {
                // Caso a API falhe ou o navegador não suporte
                console.error('Falha ao copiar o e-mail: ', err);
                alert(`Não foi possível copiar o e-mail. Endereço: ${emailAddress}`);
            });
        });
    }
});