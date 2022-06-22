import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TransportService} from '../transport.service';
import {Transport} from '../model/transport';
import {TransportDto} from '../dto/transportDto';
import {City} from '../model/city';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  transport: Transport;
  transportDto: TransportDto;
  cities: City[];
  transportCreateFrom: FormGroup = new FormGroup({
    id: new FormControl(),
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

  constructor(private transportService: TransportService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getCities();
  }

  get numberOfTransport() {
    return this.transportCreateFrom.get('numberOfTransport');
  }

  get typeOfTransport() {
    return this.transportCreateFrom.get('typeOfTransport');
  }

  get name() {
    return this.transportCreateFrom.get('name');
  }

  get pointStart() {
    return this.transportCreateFrom.get('pointStart');
  }

  get pointEnd() {
    return this.transportCreateFrom.get('pointEnd');
  }

  get phone() {
    return this.transportCreateFrom.get('phone');
  }

  get email() {
    return this.transportCreateFrom.get('email');
  }

  get timeStart() {
    return this.transportCreateFrom.get('timeStart');
  }

  get timeEnd() {
    return this.transportCreateFrom.get('timeEnd');
  }

  getCities() {
    return this.transportService.getAllCityAPI().subscribe(cities => {
      this.cities = cities;
      console.log(cities);
    }, error => {
      console.log(error);
    });
  }

  onSubmit() {
    this.transportDto = this.transportCreateFrom.value;
    console.log(this.transportDto);
    this.transportService.createTransportationAPI(this.transportDto).subscribe(() => {
        this.transportCreateFrom.reset();
        this.router.navigateByUrl('');
        console.log('Add success!');
      },
      (error) => {
        if (!error.error.status) {
          this.router.navigateByUrl('/create');
        }
      });
  }
}
