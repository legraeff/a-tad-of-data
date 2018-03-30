import React from "react";
import NasaPic from "./NasaPic";
import Enzyme from 'enzyme'
import { shallow, find, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe("NasaPic", () => {
  let mountedNasaPic;
  const nasaPic = () => {
    if (!mountedNasaPic) {
      mountedNasaPic = mount(
        <NasaPic/>
      );
    }
    return mountedNasaPic;
  }

  beforeEach(() => {
    mountedNasaPic = undefined;
  });

  it("Always render a BG image", () => {
    const background = nasaPic().find(".Image");
    expect(background.length).toBe(1);
  });

});

// describe("NasaPic", () => {
//   let props;
//   let mountedNasaPic;
//   const nasaPic = () => {
//     if (!mountedNasaPic) {
//       mountedNasaPic = mount(
//         <NasaPic {...props}/>
//       );
//     }
//     return mountedNasaPic;
//   }
//
//   it('renders a image', () => {
//     expect(nasaPic.find('.Image').length).toEqual(1)
//   })
// });
