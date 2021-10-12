import dateBin from './dateBin'

test('bin hour', () => {
  // 1 hour in ms
  const interval = 3_600_000;

  const origin = new Date('2021-01-01T00:00:00')

  expect(
    dateBin(interval, new Date('2021-01-01T08:30:00'), origin).getTime()
  ).toBe(new Date('2021-01-01T08:00:00').getTime())
  expect(
    dateBin(interval, new Date('2021-01-01T08:00:00'), origin).getTime()
  ).toBe(new Date('2021-01-01T08:00:00').getTime())
  expect(
    dateBin(interval, new Date('2020-01-01T08:30:00'), origin).getTime()
  ).toBe(new Date('2020-01-01T08:00:00').getTime())
})
