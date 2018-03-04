
describe('App', () => {
  beforeAll(() => {
    browser.get('/');
  });

  it('tests things', function() {
    expect(element(by.css('.app-header')).getText()).toEqual('Warehouse Viewer');
  });

  it('tests moar things', function() {
    expect(element(by.css('.app')).getText()).toContain('Hi');
  });
});
