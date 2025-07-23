import React from 'react'
import { Button } from './ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'

const category = [
    'Frontend Developer', ,
    'Backend Developer',
    'Full Stack Developer',
    'Data Scientist',
    'Machine Learning Engineer',
    'Graphic Designer',
    'UI/UX Designer',
    'Product Manager',
    'DevOps Engineer',
    'Mobile App Developer',
    'Cloud Engineer',
    'Cybersecurity Analyst',
    'Software Tester',
    'Database Administrator'
]
const CategoryCarousel = () => {
    return (
        <div>
            <Carousel className='w-full max-w-xl mx-auto my-20'>
                <CarouselContent>
                    {
                        category.map((cat, index) => (
                            <CarouselItem key={index} className= 'md:basis-1/2 lg-basis-1/3'>
                                <Button variant='outline'className='rounded-full'>{cat}</Button>
                            </CarouselItem>
                        ))
                }

                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default CategoryCarousel
