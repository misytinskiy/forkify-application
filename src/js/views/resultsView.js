import View from './View';
import previewView from './previewView';

class resultView extends View {
  parentElement = document.querySelector('.results');
  errorMessage = 'No recipes found for your query! Please try again ;)';
  message = '';

  generateMarkup() {
    return this.data.map(result => previewView.render(result, false)).join('');
  }
}

export default new resultView();
