
describe('App', () => {
  it('tests things', function() {
    browser.ignoreSynchronization = true;
    browser.get('/');
    expect(element(by.css('.app-header')).getText()).toEqual('Warehouse Viewer');
  });
});
