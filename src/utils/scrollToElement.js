export default function scrollToElement(event, elementId) {
    event.preventDefault();
  
    const section = document.getElementById(elementId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }