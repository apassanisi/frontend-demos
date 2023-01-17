(() => {
  const components = [
    'Select a Component',
    'Counter',
    'ContactForm',
    'TodoList',
    'Accordion'

  ];
  const $selectedComponent = document.getElementById('selectedComponent')

  components.forEach(component => {
    const $option = document.createElement('option');
    $option.value = component;
    $option.text = component;
    $selectedComponent.append($option)
  })

  const navigateTo = component => {
    switch (component) {
      case 'Counter':
        location.href = `${location.href.split('/javascript')[0]}/javascript/01-Counter/index.html`;
        break;
      case 'ContactForm':
        location.href = `${location.href.split('/javascript')[0]}/javascript/02-ContactForm/index.html`;
        break;
      case 'TodoList':
        location.href = `${location.href.split('/javascript')[0]}/javascript/03-TodoList/index.html`;
        break;
      case 'Accordion':
        location.href = `${location.href.split('/javascript')[0]}/javascript/04-Accordion/index.html`;
        break;
      default:
        break;
    }
  }

  $selectedComponent.addEventListener('change', (e) => navigateTo(e.target.value))
})()