import { Test, TestingModule } from '@nestjs/testing';
import { BridgeService } from './bridge.service';
import { Tv } from './sample/device/Tv';
import { AdvancedRemoteControl } from './sample/remote/AdvancedRemoteControl';
import { Radio } from './sample/device/Radio';

describe('BridgeService', () => {
  let service: BridgeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BridgeService],
    }).compile();

    service = module.get<BridgeService>(BridgeService);
  });

  //it('should be defined', () => {
  //expect(service).toBeDefined();
  //});

  it('should demonstrate bridge pattern', () => {
    expect(service).toBeDefined();
    let tv = new Tv();
    let tvRemote = new AdvancedRemoteControl(tv);
    tvRemote.togglePower();
    tvRemote.volumeUp();

    let radio = new Radio();
    let radioRemote = new AdvancedRemoteControl(radio);
    radioRemote.togglePower();
    radioRemote.volumeDown();
  });
});
