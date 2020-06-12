const expr = 'Goiaba';
    switch(expr){
        case 'Laranja':
            document.write('R$ 0,60 o kg');
            breack;
        case 'Manga':
        case 'Papaia':
            document.write('R$ 2,50 o kg');
            break;
        default:
            document.write('Não temos ${expr}');
    }