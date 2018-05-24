const Lift = require('./lift')
global['console'].log = () => {}
describe('Lift Control', () => {

    describe('Not Overload', () => {

        describe('LiftgoingUp', () => {
             
            it('current floor 4 target 5 should be stop at floor 5', () => {
                const lift = new Lift(4)
                lift.run(500,5)
                expect(lift.currentfloor).toBe(5)
                expect(lift.status).toBe("stop")
            }); 
            it('current floor 1 target 3 should be stop at floor 3', () => {
                const lift = new Lift()
                lift.run(500,3)
                expect(lift.currentfloor).toBe(3)
                expect(lift.status).toBe("stop")
            }); 
        });

        describe('LiftgoingDown', () => {
             
            it('current floor 4 target 1 should be stop at floor 1', () => {
                const lift = new Lift(4)
                lift.run(500,1)
                expect(lift.currentfloor).toBe(1)
                expect(lift.status).toBe("stop")
            }); 
            it('current floor 3 target 2 should be stop at floor 2', () => {
                const lift = new Lift(3)
                lift.run(500,2)
                expect(lift.currentfloor).toBe(2)
                expect(lift.status).toBe("stop")
            }); 
        });
        describe('LiftStop', () => {
             
            it('current floor 1 target 1 should be stop at floor 1', () => {
                const lift = new Lift(1)
                lift.run(500,1)
                expect(lift.currentfloor).toBe(1)
                expect(lift.status).toBe("stop")
            }); 
            it('current floor 3 target 3 should be stop at floor 3', () => {
                const lift = new Lift(3)
                lift.run(500,3)
                expect(lift.currentfloor).toBe(3)
                expect(lift.status).toBe("stop")
            }); 
        });
        
    });
    
    describe('Overload', () => {
        it('current floor 1 should be stop at floor 1', () => {
            const lift = new Lift()
            lift.run(1500,5)
            expect(lift.currentfloor).toBe(1)
            expect(lift.status).toBe("stop")
        }); 
        it('current floor 4 should be stop at floor 4', () => {
            const lift = new Lift(4)
            lift.run(1500,5)
            expect(lift.currentfloor).toBe(4)
            expect(lift.status).toBe("stop")
        }); 
        it('current floor 2 maxweight is 500 current weight is 1500 should be stop at floor 2', () => {
            const lift = new Lift(2,500)
            lift.run(1500,5)
            expect(lift.currentfloor).toBe(2)
            expect(lift.status).toBe("stop")
        }); 


    })
    
});

describe('Lift Manual Step', () => {
    describe('scenario current floor 1 goto target floor 3', () => {
        const lift = new Lift(1);

        it('current floor 1 goto targetfloor 3 should be status up ', () => {
        
            lift.move(3)
            expect(lift.currentfloor).toBe(2)
            expect(lift.status).toBe("up")
    
        }); 
        it('current floor 2 goto targetfloor 3 should be status up ', () => {
        
            lift.move(3)
            expect(lift.currentfloor).toBe(3)
            expect(lift.status).toBe("up")
    
        }); 
        it('current floor 3 goto targetfloor 3 should be status stop ', () => {
        
            lift.move(3)
            expect(lift.currentfloor).toBe(3)
            expect(lift.status).toBe("stop")
    
        });         
    });

    describe('scenario current floor 3 goto target floor 1', () => {
        const lift = new Lift(3);

        it('current floor 3 goto targetfloor 1 should be status down ', () => {
        
            lift.move(1)
            expect(lift.currentfloor).toBe(2)
            expect(lift.status).toBe("down")
    
        }); 
        it('current floor 2 goto targetfloor 1 should be status down ', () => {
        
            lift.move(1)
            expect(lift.currentfloor).toBe(1)
            expect(lift.status).toBe("down")
    
        }); 
        it('current floor 3 goto targetfloor 1 should be status stop ', () => {
        
            lift.move(1)
            expect(lift.currentfloor).toBe(1)
            expect(lift.status).toBe("stop")
    
        });         
    });
    
    describe('check weight is overload or not overload', () => {

        it('Maxweight is 1500  Weight is 1000 sholud be not overload', () => {
             
            const lift = new Lift(1,1500)

            expect(false).toBe(lift.isOverload(1000))


        });

        it('Maxweight is 1500  Weight is 2000 sholud be overload', () => {
             
            const lift = new Lift(1,1500)

            expect(true).toBe(lift.isOverload(2000))


        });
    });

    describe('scenario current floor 1 goto target floor 1', () => {
        const lift = new Lift(1);

        it('current floor 1 goto targetfloor 1 should be status stop ', () => {
        
            lift.move(1)
            expect(lift.currentfloor).toBe(1)
            expect(lift.status).toBe("stop")
    
        }); 
    });


        
});