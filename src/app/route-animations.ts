import {
    trigger,
    transition,
    style,
    query,
    group,
    animateChild,
    animate,
    keyframes,
} from '@angular/animations';


export const fader = 
trigger('routeAnimations', [
    transition('* <=> *', [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                left: 0,
                width: '100%',
                opacity: 0,
                transform: 'scale(0) translateY(100%)',
            })
        ]),
        query(':enter', [
            animate('600ms ease',
            style({ opacity:1, transform: 'scale(1) translateY(0 )'})
            )
        ])
    ])
]);


// positioned

export const slider =
trigger('routeAnimations', [
    transition('* => isLeft', slideTo('left')),
    transition('* => isRight', slideTo('right')),
    transition('isRight => *', slideTo('left')),
    transition('isLeft => *', slideTo('right'))
]);

function slideTo(direction) {
    const optional = {optional: true};
    return [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                [direction]: 0,
                width: '100%'
            })
        ], optional),

        query(':enter', [
            style({ [direction]: '-100%' })
        ]),
        group([
            query(':leave', [
                animate('600ms ease', style({ [direction]: '0%' }))
            ])
        ]),
    ];
}

export const transformer = 
trigger('routeAnimations', [
    transition('* => isLeft', translateTo({x: -100, y: -100, rotate: -720})),
    transition('* => isRight', translateTo({x: 100, y: -100, rotate: 90})),
    transition('isRight => *', translateTo({x: -100, y: -100, rotate: 360})),
    transition('isLeft => *', translateTo({x: 100, y: -100, rotate: -360}))
]);

function translateTo({x = 100, y = 0, rotate = 0}){
    const optional = {optional: true};
    return [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ], optional),
        query(':enter', [
            style({ transform: `translate(${x}%, ${y}%) rotate(${rotate}deg)`})
        ]),
        group([
            query(':leave', [
                animate('600ms ease-out',
                style({ transform: `translate(${x}%, ${y}%) rotate(${rotate}deg)`})
                )
            ], optional),
            query(':enter', [
                animate('600ms ease-out',
                style({ transform: `translate(0, 0) rotate(0)`})
                )
            ])
        ])
    ];
}


export const stepper =
trigger('routeAnimations', [
    transition('* <=> *', [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                left: 0,
                width: '100%'
            }),
        ]),
        group([
            query(':enter', [
                animate('2000ms ease', keyframes([
                    style({ transform: 'scale(0) translateX(100%)', offset: 0 }), // start of 2 second keyframe animation
                    style({ transform: 'scale(0.5) translateX(25%)', offset: .3 }), // 30% into 2 second keyframe animation
                    style({ transform: 'scale(1) translateX(0%)', offset: 1 }) // end of 2 second keyframe animation
                ])),
            ]),
            query(':leave', [
                animate('2000ms ease-out', keyframes([
                    style({ transform: 'scale(1)', offset: 0 }),
                    style({ transform: 'scale(0.5) translateX(-25%) rotate(0)', offset: 0.3 }),
                    style({ transform: 'rotate(-180deg) translateY(-50%) scale(6)', offset: 1 }),
                ])),
            ])
        ]),
    ])    
])
