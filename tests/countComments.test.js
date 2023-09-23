/**
 * @jest-environment jsdom
 */
import countComments from '../src/modules/countComments.js';

describe('countComments', () => {
  beforeEach(() => {
    // Set up a clean DOM for each test
    document.body.innerHTML = `
      <div class="comments-counter"></div>
      <div class="user-comment">Comment 1</div>
      <div class="user-comment">Comment 2</div>
    `;
  });

  it('should update comments counter when there are comments', () => {
    // Call the countComments function
    countComments();

    // Check if the comments counter has been updated correctly
    const commentsCounter = document.querySelector('.comments-counter');
    expect(commentsCounter.innerHTML).toContain('Comments (2)');
  });

  it('should display "Comments (0)" when there are no comments', () => {
    // Remove the comment nodes to simulate no comments
    const commentNodes = document.querySelectorAll('.user-comment');
    commentNodes.forEach((node) => {
      node.parentNode.removeChild(node);
    });

    // Call the countComments function
    countComments();

    const commentsCounter = document.querySelector('.comments-counter');
    expect(commentsCounter.innerHTML).toContain('');
  });
});
