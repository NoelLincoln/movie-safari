/**
 * @jest-environment jsdom
 */
import displayComments from '../../src/modules/displayComments.js';

// Mock the fetch function
global.fetch = jest.fn();

describe('displayComments', () => {
  beforeEach(() => {
    // Clear the DOM between tests
    document.body.innerHTML = `
      <h4 class="movie-title" id="123">Movie Title</h4>
      <div class="comments-counter"><p>Comments (0)</p></div>
      <ul class="movie-comments"></ul>
    `;
  });

  it('should display comments and update the counter on success', async () => {
    // Define a mock response with comments
    // Arrange
    const mockResponse = {
      ok: true,
      json: () => Promise.resolve([
        {
          creation_date: '2023-09-23',
          username: 'User1',
          comment: 'Comment 1',
        },
        {
          creation_date: '2023-09-24',
          username: 'User2',
          comment: 'Comment 2',
        },
      ]),
    };

    // Mock the fetch call to return the mock response
    // Act
    fetch.mockResolvedValueOnce(mockResponse);

    // Call the displayComments function
    await displayComments();

    // Verify that the DOM has been updated correctly
    const commentsCounter = document.querySelector('.comments-counter');
    const commentsList = document.querySelector('.movie-comments');

    // Assert
    expect(commentsCounter.textContent).toContain('Comments (2)');
    expect(commentsList.querySelectorAll('li').length).toBe(2);
  });

  it('should handle network errors', async () => {
    // Mock a network error by rejecting the fetch promise
    fetch.mockRejectedValueOnce(new Error('Network error'));

    // Spy on console.error to check if the error message is logged
    const consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    // Call the displayComments function
    await displayComments();

    // Verify that the error message is logged to the console
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'Error fetching comments:',
      expect.any(Error),
    );

    // check that the DOM remains unchanged in this case
    const commentsCounter = document.querySelector('.comments-counter');
    const commentsList = document.querySelector('.movie-comments');

    expect(commentsCounter.textContent).toContain('Comments (0)');
    expect(commentsList.querySelectorAll('li').length).toBe(0);

    // Restore the original console.error function
    consoleErrorSpy.mockRestore();
  });
});
