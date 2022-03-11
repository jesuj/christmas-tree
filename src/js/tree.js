export function render(height, type) {
    let impar = 1;
    let count = height - 1;
    let tree = Array(height).fill(0).reduce((acc, curr, index) => {
        acc += '_'.repeat(count) + '*'.repeat(impar) + '_'.repeat(count) + '\n';
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