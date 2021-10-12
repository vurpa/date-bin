function dateBin(interval: number, source: Date, origin: Date): Date {
  const sourceTime = source.getTime()
  const originTime = origin.getTime()

  const diff = sourceTime - originTime

  let delta = diff - (diff % interval);

  if (originTime > sourceTime)
    delta -= interval;

  const result = originTime + delta

  return new Date(result)
}

export default dateBin
