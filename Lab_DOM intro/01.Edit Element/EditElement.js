function editElement(ref,match,replacer) {
 const content= ref.textContent; //n
 const matcher= new RegExp(match, 'g');
 const edited= content.replace(matcher,replacer);
 ref.textContent=edited;
}