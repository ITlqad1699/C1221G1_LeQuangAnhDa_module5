import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {TransportService} from '../transport.service';
import {Transport} from '../model/transport';
import {City} from '../model/city';
import {TransportDto} from '../dto/transportDto';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  transportEditForm: FormGroup;
  id: number;
  transport: Transport;
  transportDto: TransportDto;
  cities: City[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private transportService: TransportService) {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      console.log(this.id);
      this.transportEditForm = new FormGroup({
        id: new FormControl('', [Validators.required]),
        numberOfTransport: new FormControl('', [Validators.required]),
        typeOfTransport: new FormControl('', [Validators.required]),
        name: new FormControl('', [Validators.required]),
        pointStart: new FormControl('', [Validators.required]),
        pointEnd: new FormControl('', [Validators.required]),
        phone: new FormControl('', [Validators.required, Validators.pattern('^(097|090|093)\\d{7}$')]),
        email: new FormControl('', [Validators.required, Validators.email]),
        timeStart: new FormControl('', [Validators.required, Validators.pattern('^$|^\\d{2}:\\d{2}$')]),
        timeEnd: new FormControl('', [Validators.required, Validators.pattern('^$|^\\d{2}:\\d{2}$')]),
        active: new FormControl(1)
      });
    });
  }

  get numberOfTransport() {
    return this.transportEditForm.get('numberOfTransport');
  }

  get typeOfTransport() {
    return this.transportEditForm.get('typeOfTransport');
  }

  get name() {
    return this.transportEditForm.get('name');
  }

  get pointStart() {
    return this.transportEditForm.get('pointStart');
  }

  get pointEnd() {
    return this.transportEditForm.get('pointEnd');
  }

  get phone() {
    return this.transportEditForm.get('phone');
  }

  get email() {
    return this.transportEditForm.get('email');
  }

  get timeStart() {
    return this.transportEditForm.get('timeStart');
  }

  get timeEnd() {
    return this.transportEditForm.get('timeEnd');
  }


  ngOnInit(): void {
    this.findByid(this.id);
    this.getCities();
  }

  findByid(id: number) {
    return this.transportService.fingByIdAPI(id).subscribe(transportation => {
      this.transport = transportation;
      console.log(this.transport);
      this.transportEditForm.patchValue(this.transport);
    });
  }

  getCities() {
    return this.transportService.getAllCityAPI().subscribe(cities => {
      this.cities = cities;
      console.log(cities);
    }, error => {
      console.log(error);
    });
  }

  onSubmit(id: number) {
    if (this.transportEditForm.invalid) {
      if (this.numberOfTransport.value == '') {
        this.numberOfTransport.setErrors({empty: 'Empty! Please choose!'});
      }
      if (this.typeOfTransport.value == '') {
        this.typeOfTransport.setErrors({empty: 'Empty! Please choose!'});
      }
      if (this.name.value == '') {
        this.name.setErrors({empty: 'Empty! Please input!'});
      }
      if (this.pointStart.value == '') {
        this.pointStart.setErrors({empty: 'Empty! Please choose!'});
      }
      if (this.pointEnd.value == '') {
        this.pointEnd.setErrors({empty: 'Empty! Please choose!'});
      }
      if (this.phone.value == '') {
        this.phone.setErrors({empty: 'Empty! Please choose!'});
      }
      if (this.email.value == '') {
        this.email.setErrors({empty: 'Empty! Please choose!'});
      }
      if (this.timeStart.value == '') {
        this.timeStart.setErrors({empty: 'Empty! Please choose!'});
      }
      if (this.timeEnd.value == '') {
        this.timeEnd.setErrors({empty: 'Empty! Please choose!'});
      }
      this.router.navigateByUrl('update/' + this.id);
    } else {
      this.transportDto = this.transportEditForm.value;

      this.transportService.updateTransportationAPI(id, this.transportDto).subscribe(() => {
        console.log(this.transportDto);
        this.transportEditForm.reset();
        alert('update success!');
        this.router.navigateByUrl('');
      }, error => {
        console.log(error);
      });
    }
  }

  compareFn(t1, t2): boolean {
    return t1 && t2 ? t1.id === t2.id : t1 === t2;
  }
}
