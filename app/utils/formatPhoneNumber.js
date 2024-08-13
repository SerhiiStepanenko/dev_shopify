const formatPhoneNumber = (phone) => {
    // Удаляем все нецифровые символы
    const cleaned = ('' + phone).replace(/\D/g, '');

    if (cleaned.length === 10) {
        // Формат для номеров без кода страны (например, 0443455215)
        const match = cleaned.match(/^(\d{3})(\d{3})(\d{2})(\d{2})$/);
        if (match) {
            return `${match[1]} ${match[2]} ${match[3]} ${match[4]}`;
        }
    } else if (cleaned.length === 12) {
        // Формат для номеров с кодом страны (например, 380443455215)
        const match = cleaned.match(/^(\d{3})(\d{3})(\d{3})(\d{3})$/);
        if (match) {
            return `${match[1]} ${match[2]} ${match[3]} ${match[4]}`;
        }
    }

    // Если ни один шаблон не подошел, возвращаем оригинальный номер
    return phone;
};

export default formatPhoneNumber;