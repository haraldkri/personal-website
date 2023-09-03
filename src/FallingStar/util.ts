export function randomBetween(num1: number, num2: number): number {
    return Math.random() * (num2 - num1) + num1;
}

export function generateRandomXOffset(): number {
    return randomBetween(0, 100)
}

export function generateRandomAnimationDuration(): number {
    return randomBetween(3, 3)
}

export function generateRandomAnimationDelay(): number {
    return randomBetween(0, 1.5)
}