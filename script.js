function getStringLength(value) {
    if (typeof value !== 'string') {
        return 0;
    }
    return value.length;
}

// console.log(getStringLength('aaaaa'));     
// console.log(getStringLength('b'));         
// console.log(getStringLength(''));          
// console.log(getStringLength());            
// console.log(getStringLength(null));       
// console.log(getStringLength(undefined));  


function isString(value) {
    return typeof value === 'string' || value instanceof String;
}

// console.log(isString());                   
// console.log(isString(null));                
// console.log(isString([]));                 
// console.log(isString({}));                 
// console.log(isString('test'));            
// console.log(isString(new String('test')));  



function concatenateStrings(a,b) {
    return a + b;
}

// console.log(concatenateStrings('aa', 'bb')); 
// console.log(concatenateStrings('aa', '')); 
// console.log(concatenateStrings('', 'bb')); 


function getFirstChar(value) {
    return value[0] ?? '';
}

// console.log(getFirstChar('John Doe'));
// console.log(getFirstChar('cat'));    
// console.log(getFirstChar(''));         

function removeLeadingAndTrailingWhitespaces(value) {
    return value.trim();
}

// console.log(removeLeadingAndTrailingWhitespaces('  Abracadabra'));    
// console.log(removeLeadingAndTrailingWhitespaces('cat '));                  
// console.log(removeLeadingAndTrailingWhitespaces('\t\t\tHello, World! ')); 

function removeLeadingWhitespaces(value) {
    return value.trimStart();
}

// console.log(removeLeadingWhitespaces('  Abracadabra'));      
// console.log(removeLeadingWhitespaces('cat '));            
// console.log(removeLeadingWhitespaces('\t\t\tHello, World! '));   

function removeTrailingWhitespaces(value) {
    return value.trimEnd();
}

// console.log(removeTrailingWhitespaces('  Abracadabra'));      
// console.log(removeTrailingWhitespaces('cat '));              
// console.log(removeTrailingWhitespaces('\t\t\tHello, World! '));  

function repeatString(str, times) {
    if (times < 0) {
        return '';
    }
    return str.repeat(times);
}

// console.log(repeatString('A', 5)); 
// console.log(repeatString('cat', 3)); 
// console.log(repeatString('', 3));  
// console.log(repeatString('abc', -2));

function removeFirstOccurrences(str, value) {
    return str.replace(value, '');
}

// console.log(removeFirstOccurrences('To be or not to be', 'be'));
// console.log(removeFirstOccurrences('I like legends', 'end')); 
// console.log(removeFirstOccurrences('ABABAB', 'BA'));          

function removeLastOccurrences(str, value) {
    let index = str.lastIndexOf(value);
    if (index === -1) {
        return str;
    }
    return str.slice(0, index) + str.slice(index + value.length);
}

// console.log(removeLastOccurrences('To be or not to be', 'be')); 
// console.log(removeLastOccurrences('I like legends', 'end'));   
// console.log(removeLastOccurrences('ABABAB', 'BA'));


function sumOfCodes(str) {
    if (typeof str !== 'string') {
        return 0;
    }

    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += str.charCodeAt(i);
    }
    return sum;
}

// console.log(sumOfCodes('My String')); 
// console.log(sumOfCodes('12345'));    
// console.log(sumOfCodes(''));          
// console.log(sumOfCodes());  

function startsWith(str, substr) {
    return str.startsWith(substr);
}

// console.log(startsWith('Hello World', 'World')); 
// console.log(startsWith('Hello World', 'Hello'));  

function endsWith(str, substr) {
    return str.endsWith(substr);
}

// console.log(endsWith('Hello World', 'World')); 
// console.log(endsWith('Hello World', 'Hello')); 

function formatTime(minutes, seconds) {
    let mm = String(minutes);
    let ss = String(seconds);

    if (mm.length < 2) {
        mm = '0' + mm;
    }
    if (ss.length < 2) {
        ss = '0' + ss;
    }

    return mm + ':' + ss;
}

// console.log(formatTime(5, 30)); 
// console.log(formatTime(1, 15)); 
// console.log(formatTime(0, 45)); 
// console.log(formatTime(0, 0)); 

function reverseString(str) {
    return str.split('').reverse().join('');
}

// console.log(reverseString('abcdef'));
// console.log(reverseString('12345')); 


function orderAlphabetically(str) {
    return str.split('').sort().join('');
}

// console.log(orderAlphabetically('webmaster'));  
// console.log(orderAlphabetically('textbook'));   
// console.log(orderAlphabetically('abc123xyz'));  

function containsSubstring(str, substring) {
    return str.includes(substring);
}

// console.log(containsSubstring('Hello, World!', 'World')); 
// console.log(containsSubstring('JavaScript is Fun', 'Python'));
// console.log(containsSubstring('12345', '34'));            

function countVowels(str) {
    let vowels = 'aeiouyAEIOUY';
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}

// console.log(countVowels('apple'));   
// console.log(countVowels('banana'));  
// console.log(countVowels('cherry'));  
// console.log(countVowels('aEiOu'));   
// console.log(countVowels('XYZ'));    

function isPalindrome(str) {
    let cleaned = str.toLowerCase().split(' ').join('');
    let reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}

// console.log(isPalindrome('madam'));              
// console.log(isPalindrome('racecar'));             
// console.log(isPalindrome('apple'));               
// console.log(isPalindrome('No lemon, no melon'));  

function findLongestWord(sentence) {
    let words = sentence.split(' ');
    let longest = '';

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}

// console.log(findLongestWord('The quick brown fox'));    
// console.log(findLongestWord('A long and winding road'));  
// console.log(findLongestWord('No words here'));            

function reverseWords(str) {
    const words = str.split(' ');
    const reversedWords = words.map(word => word.split('').reverse().join(''));
    return reversedWords.join(' ');
}

// console.log(reverseWords('Hello World'));           
// console.log(reverseWords('The Quick Brown Fox'));  

function invertCase(str) {
    let res = ''
    for(leter of str){
        if(leter === leter.toUpperCase()){
            res += leter.toLowerCase()
        }
        else{
            res += leter.toUpperCase()
        }
    }
    return res
}

// console.log(invertCase('Hello, World!'));   
// console.log(invertCase('JavaScript is Fun')); 
// console.log(invertCase('12345'));  

function getStringFromTemplate(firstName, lastName) {
    return `Hello, ${firstName} ${lastName}!`;
}

// console.log(getStringFromTemplate('John', 'Doe'));    
// console.log(getStringFromTemplate('Chuck', 'Norris')); 

function extractNameFromTemplate(value) {
    return value.slice(7, -1);
}

// console.log(extractNameFromTemplate('Hello, John Doe!'));  
// console.log(extractNameFromTemplate('Hello, Chuck Norris!'));  

function unbracketTag(str) {
    return str.slice(1, -1);
}

// console.log(unbracketTag('<div>')); 
// console.log(unbracketTag('<span>'));  
// console.log(unbracketTag('<a>'));     

function extractEmails(str) {
    return str.split(';');
}

// console.log(extractEmails('angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com'));
// console.log(extractEmails('info@gmail.com'));


function encodeToRot13(str) {
    let res =''
    for(i = 0 ; i < str.length; ++i){
        let cod = str.charCodeAt(i)
        if(cod >= 65 && cod <= 90){
            res += String.fromCharCode(((cod - 65 + 13) % 26) + 65)
        }
        else if(cod >= 97 && cod <= 122){
            res += String.fromCharCode(((cod - 97 + 13) % 26) + 97)
        }
        else{
            res += str[i]
        }
    }
    return res
}

// console.log(encodeToRot13('hello'));
// console.log(encodeToRot13('Why did the chicken cross the road?'));
// console.log(encodeToRot13('Gb trg gb gur bgure fvqr!'));
// console.log(encodeToRot13('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'));

function getCardId(str) {
    let cards = ['A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
        'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
        'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
        'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
    ]
    let find = cards.indexOf(str)

    return find
}

// console.log(getCardId('A♣')); 
// console.log(getCardId('2♣'));   
// console.log(getCardId('K♣'));  
// console.log(getCardId('A♦'));  
// console.log(getCardId('Q♠'));   
// console.log(getCardId('K♠'));   