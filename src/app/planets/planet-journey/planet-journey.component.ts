import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ISpaceship, removeHandlerCallback} from '@algotec/spaceship-parts';
import {ActivatedRoute, Router} from '@angular/router';
import {SpaceshipsService} from '../../spaceships/spaceships.service';
import {IPlanetData, shipRouteData} from '../common/common.types';
import {SpaceshipImageComponent} from '../../spaceships/spaceship-image/spaceship-image.component';

@Component({
  selector: 'app-planet-journey',
  templateUrl: './planet-journey.component.html',
  styleUrls: ['./planet-journey.component.scss']
})
export class PlanetJourneyComponent implements OnInit, AfterViewInit, OnDestroy {
  destination: IPlanetData;
  ship: ISpaceship;
  @ViewChild(SpaceshipImageComponent, {read: ElementRef, static: true}) shipElement: ElementRef;
  @ViewChild('targetPlanet', {read: ElementRef, static: true}) targetPlanet: ElementRef;
  private destinationLeft: number;
  private currentLeft: number = 0;
  private initialShipPos: number;
  private shipID: number;
  private fromPlanet: IPlanetData;
  private removeFuelEndHandler: removeHandlerCallback;

  get journeyComplete() {
    return this.ship.engine.fuelSupply.fuelLeft === 0 || this.initialShipPos + this.currentLeft >= this.destinationLeft;
  }

  constructor(private activatedRoute: ActivatedRoute, private spaceshipsSvc: SpaceshipsService, private router: Router) {
    this.shipID = this.activatedRoute.snapshot.params[shipRouteData];
    this.ship = this.activatedRoute.snapshot.data.ship; // using resolvers
    this.fromPlanet = this.activatedRoute.snapshot.data.fromPlanet;
    this.destination = this.activatedRoute.snapshot.data.destinationPlanet;
  }

  ngOnInit() {
    this.initialShipPos = this.shipElement.nativeElement.getBoundingClientRect().x;
    this.removeFuelEndHandler = this.ship.engine.fuelSupply.onFuelEnd(() => this.spaceshipsSvc.onFuelEnd(this.shipID))
  }

  ngOnDestroy() {
    this.removeFuelEndHandler();
  }

  ngAfterViewInit() {
    this.destinationLeft = this.targetPlanet.nativeElement.getBoundingClientRect().x;
  }

  moveRight() {
    if (this.ship.engine.started) {
      if ((this.initialShipPos + this.currentLeft) < this.destinationLeft) {
        let distance;
        if (this.fromPlanet.distance === 0 || this.destination.distance === 0) {
          distance = this.fromPlanet.distance + this.destination.distance;
        } else {
          distance = Math.abs(this.fromPlanet.distance - this.destination.distance);
        }
        const nextLeft = Math.trunc(this.currentLeft + (5 / distance));
        this.shipElement.nativeElement.style.transform = 'translateX(' + nextLeft + 'px)';
        this.currentLeft = nextLeft;
        requestAnimationFrame(() => {
          this.moveRight();
        });
      } else {
        this.destinationReached();
      }
    }
  }

  takeOff() {
    this.ship.engine.start().then(() => {
      this.moveRight()
    }).catch((e: Error) => {
      console.log('failed to start engine', e.message);
    });
  }

  private async destinationReached() {
    this.spaceshipsSvc.setPosition(this.shipID, this.destination.name);
    await this.ship.engine.stop();
    if (this.destination.name === 'Earth') {
      await this.router.navigate(['planets']);
    } else {
      await this.router.navigate(['planet', this.destination.name], {queryParams: {ship: this.shipID}});
    }
  }

  shutDown() {
    this.ship.engine.stop().then(() => {
      console.log('engine stopped!');
    });
  }

}
