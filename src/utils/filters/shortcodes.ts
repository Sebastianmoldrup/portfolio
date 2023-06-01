export function list(p) {
  if (/\[list/.test(p.text)) return { type: 'text', text: '<p>første</p>' };
  return p;
}
export function ls(p) {
  console.log('triggered');
  if (/\[ls/.test(p.text)) return { type: 'shortcode', text: '' };
  return p;
}
export function contactform(p) {
  if (/\[contactform/.test(p.text)) return { type: 'contactform', text: '' };
  return p;
}
