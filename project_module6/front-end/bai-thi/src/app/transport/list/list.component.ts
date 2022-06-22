import {Component, OnInit} from '@angular/core';
import {TransportService} from '../transport.service';
import {Transport} from '../model/transport';
import {Router} from '@angular/router';

declare let createThreeDots: any;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  transports: Transport[];
  p: number = 1;
  nameDelete: any;
  idDelete = 0;
  totalPages = 0;
  pageNumber: number;
  transportationDelete: Transport;

  constructor(private transrportService: TransportService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllTransport();
    // tslint:disable-next-line:no-unused-expression
    new createThreeDots();
  }

  getAllTransport() {
    this.transrportService.getAllTransportationAPI(
      this.pageNumber).subscribe(transports => {
        this.transports = transports;
        console.log(this.transports);
        // @ts-ignore
        this.transports = transports.content;
        // @ts-ignore
        this.totalPages = transports.totalPages;
        // @ts-ignore
        this.pageNumber = transports.pageable.pageNumber;
      },
      error => {
        console.log(error);
      });
  }

  sendNameDelete(id: number, name: string) {
    this.idDelete = id;
    this.nameDelete = name;
  }

  deleteTransport(closeModal: HTMLButtonElement) {
    this.transrportService.fingByIdAPI(this.idDelete).subscribe(res => {
      this.transportationDelete = res;
      console.log(this.transportationDelete);
      this.transrportService.deleteTransportationAPI(this.transportationDelete.id).subscribe(() => {
        this.ngOnInit();
        this.router.navigateByUrl('');
        closeModal.click();
      });
    });
  }

  previousPage() {
    this.transrportService.getAllTransportationAPI(
      this.pageNumber - 1).subscribe(transports => {
      // @ts-ignore
      this.transports = transports.content;
      // @ts-ignore
      this.totalPages = transports.totalPages;
      // @ts-ignore
      this.pageNumber = transports.pageable.pageNumber;
    });
  }

  nextPage() {
    this.transrportService.getAllTransportationAPI(
      this.pageNumber + 1).subscribe(transports => {
      // @ts-ignore
      this.transports = transports.content;
      // @ts-ignore
      this.totalPages = transports.totalPages;
      // @ts-ignore
      this.pageNumber = transports.pageable.pageNumber;
    });
  }

  search() {

  }


  // getAllTransport(startPointKey: string,
  //                 endPointKey: string,
  //                 timeStartKey: string,
  //                 timeEndKey: string) {
  //   this.transrportService.getAllTransportationAPI(startPointKey,
  //     endPointKey,
  //     timeStartKey,
  //     timeEndKey,
  //     this.pageNumber).subscribe(transports => {
  //       this.transports = transports;
  //       console.log(this.transports);
  //       // @ts-ignore
  //       this.transports = transports.content;
  //       // @ts-ignore
  //       this.totalPages = transports.totalPages;
  //       // @ts-ignore
  //       this.pageNumber = transports.pageable.pageNumber;
  //     },
  //     error => {
  //       console.log(error);
  //     });
  // }
  //
}
