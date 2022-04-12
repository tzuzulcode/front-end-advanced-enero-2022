import {
    slugify,
    composeArticleSlug,
    extractArticleIdFromSlug,
    cutTextToLength
} from './index'

describe('cutTextToLength cuts a string when it is too long', () => { 
    test('should cut a string that exceeds 11 characters', () => { 
        const initialString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi iaculis, felis quis sagittis molestie, mi sem lobortis dui, a sollicitudin nibh erat id ex."
        const cutResult = cutTextToLength(initialString,11)

        expect(cutResult).toEqual('Lorem ipsum...')
    })

    test('Should not cut a string if it is shorter than 11',()=>{
        const initialString = "Lorem ipsum"

        const cutResult = cutTextToLength(initialString,11)
        expect(cutResult).toEqual("Lorem ipsum")
    })
})

describe('slugify makes a string URL-safe', () => { 
    test("Should convert a string to URL-safe format",()=>{
        const initialString = "Lorem ipsum"

        const slugifiedString = slugify(initialString)

        expect(slugifiedString).toEqual('lorem-ipsum')
    })

    test("Should slugify a string with special characters",()=>{
        const initialString = "Lorem ipsum!@#$%&/("
        const slugifiedString = slugify(initialString)

        expect(slugifiedString).toEqual('lorem-ipsum')
    })
 })