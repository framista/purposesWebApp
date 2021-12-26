export const createEvent = (name, value) => {
    const event = { target: { name, value }}
    return event;
} 