import { TestBed } from "@angular/core/testing"
import { CarBrandService } from "./car-brand.service"


describe('test observables in car brand service',()=>{

    let carBrandService: CarBrandService;
    beforeEach(()=>{
        TestBed.configureTestingModule({
            providers: [CarBrandService]
        })
    
        carBrandService = TestBed.inject(CarBrandService);
    })

    it('empty',()=>{
        
    })
})