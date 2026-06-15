/**
 * Lightweight className merger.
 * Joins truthy class strings — replace with `clsx` or `tailwind-merge` if needed.
 *
 * @param {...string} classes
 * @returns {string}
 */
export const cn = (...classes) => classes.filter(Boolean).join(' ');
