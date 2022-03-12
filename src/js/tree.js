/**
 * @module Tree
 */
/**
 * Crea la estuctura del arbol 
 * @example
 * render(3)
 * // __*__
 * // _***_
 * // *****
 * // __#__
 * // __#__
 * @export
 * @param {number} height la altura del arbol
 * @param {string} type El typo de arbol 
 * @return {string} El arbol generado
 */
export function render(height, type='*') {
    let impar = 1;
    let count = height - 1;
    let tree = Array(height).fill(0).reduce((acc, _) => {
        acc += '_'.repeat(count) + type.repeat(impar) + '_'.repeat(count) + '\n';
        impar = impar + 2;
        count--;
        return acc;
    }, '')
    if (height !== 0) {
        tree += '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1) + '\n';
        tree += '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1);
    }
    return tree;
}