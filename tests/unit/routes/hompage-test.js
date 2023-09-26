import { module, test } from 'qunit';
import { setupTest } from 'ecommerce/tests/helpers';

module('Unit | Route | hompage', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:hompage');
    assert.ok(route);
  });
});
