/**
 * Aciona a função apenas quando rolar um scroll na página
 * @param {*} target
 */
export function topScroll (target) {
  // Inspeciona o height do elemento para reaparecer ou desaparecer botão
  target.forEach(function (element) {
    if (element.offsetTop < 300) {
      element.style.display = 'none'
    } else {
      element.style.display = 'block'
    }
  })
}
