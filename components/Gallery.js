import Image from "next/image";

const Gallery = ({ galleryData }) => {
  const {
    first,
    second,
    third,
    fourth,
    fifth,
    sixth,
    seventh,
    eighth,
    mobile1,
    mobile2,
    mobile3,
    mobile4,
    mobile5,
    contactus,
  } = galleryData;

  return (
    <motion
      id="gallery"
      className="relative bg-[#FDFAEC] box-border w-full block my-0 mx-auto"
    >
      <div className="block relative">
        <div className="relative flex left-[-20%] w-[140%] pt-[12%] pb-[12%] justify-center flex-wrap">
          {/* First */}
          <div className="inspo-flex-item">
            <a className="inspo-flex_card w-inline-block">
              <div className="inspo-flex_desktop">
                <div className="inspo-flex_aspect-desktop">
                  <div className="Image_src">
                    <Image src={eighth} width={4095} height={3300} />
                  </div>
                </div>
              </div>

              <div className="inspo-flex_card-overlay"></div>
            </a>
          </div>

          {/* Mobile first */}

          <div className="inspo-flex-item">
            <a className="inspo-flex_card w-inline-block">
              <div className="inspo-flex_mobile">
                <div className="inspo-flex_aspect-mobile">
                  <div className="Image_src">
                    <Image src={mobile4} width={1346} height={6200} />
                  </div>
                </div>
              </div>

              <div className="inspo-flex_card-overlay"></div>
            </a>
          </div>

          {/* second */}

          <div className="inspo-flex-item">
            <a className="inspo-flex_card w-inline-block">
              <div className="inspo-flex_desktop">
                <div className="inspo-flex_aspect-desktop">
                  <div className="Image_src">
                    <Image src={first} width={4095} height={3200} />
                  </div>
                </div>
              </div>

              <div className="inspo-flex_card-overlay"></div>
            </a>
          </div>

          {/* Mobile second */}

          <div className="inspo-flex-item">
            <a className="inspo-flex_card w-inline-block">
              <div className="inspo-flex_mobile">
                <div className="inspo-flex_aspect-mobile">
                  <div className="Image_src">
                    <Image src={mobile1} width={1346} height={2800} />
                  </div>
                </div>
              </div>

              <div className="inspo-flex_card-overlay"></div>
            </a>
          </div>

          {/* third */}

          <div className="inspo-flex-item">
            <a className="inspo-flex_card w-inline-block">
              <div className="inspo-flex_desktop">
                <div className="inspo-flex_aspect-desktop">
                  <div className="Image_src">
                    <Image src={seventh} width={4095} height={2800} />
                  </div>
                </div>
              </div>

              <div className="inspo-flex_card-overlay"></div>
            </a>
          </div>

          {/* Mobile third */}

          <div className="inspo-flex-item">
            <a className="inspo-flex_card w-inline-block">
              <div className="inspo-flex_mobile">
                <div className="inspo-flex_aspect-mobile">
                  <div className="Image_src">
                    <Image src={mobile5} width={1346} height={3300} />
                  </div>
                </div>
              </div>

              <div className="inspo-flex_card-overlay"></div>
            </a>
          </div>

          {/* fourth */}

          <div className="inspo-flex-item">
            <a className="inspo-flex_card w-inline-block">
              <div className="inspo-flex_desktop">
                <div className="inspo-flex_aspect-desktop">
                  <div className="Image_src">
                    <Image src={fifth} width={4095} height={2800} />
                  </div>
                </div>
              </div>

              <div className="inspo-flex_card-overlay"></div>
            </a>
          </div>

          {/* fifth */}

          <div className="inspo-flex-item">
            <a className="inspo-flex_card w-inline-block">
              <div className="inspo-flex_desktop">
                <div className="inspo-flex_aspect-desktop">
                  <div className="Image_src">
                    <Image src={second} width={4095} height={2800} />
                  </div>
                </div>
              </div>

              <div className="inspo-flex_card-overlay"></div>
            </a>
          </div>

          {/* sixth */}

          <div className="inspo-flex-item">
            <a className="inspo-flex_card w-inline-block">
              <div className="inspo-flex_desktop">
                <div className="inspo-flex_aspect-desktop">
                  <div className="Image_src">
                    <Image src={sixth} width={4095} height={2800} />
                  </div>
                </div>
              </div>

              <div className="inspo-flex_card-overlay"></div>
            </a>
          </div>

          {/* Mobile fourth */}

          <div className="inspo-flex-item">
            <a className="inspo-flex_card w-inline-block">
              <div className="inspo-flex_mobile">
                <div className="inspo-flex_aspect-mobile">
                  <div className="Image_src">
                    <Image src={mobile3} width={1346} height={6200} />
                  </div>
                </div>
              </div>

              <div className="inspo-flex_card-overlay"></div>
            </a>
          </div>

          {/* seventh */}

          <div className="inspo-flex-item">
            <a className="inspo-flex_card w-inline-block">
              <div className="inspo-flex_desktop">
                <div className="inspo-flex_aspect-desktop">
                  <div className="Image_src">
                    <Image src={fourth} width={4095} height={2800} />
                  </div>
                </div>
              </div>

              <div className="inspo-flex_card-overlay"></div>
            </a>
          </div>

          {/* Mobile first */}

          <div className="inspo-flex-item">
            <a className="inspo-flex_card w-inline-block">
              <div className="inspo-flex_mobile">
                <div className="inspo-flex_aspect-mobile">
                  <div className="Image_src">
                    <Image src={mobile2} width={1346} height={3950} />
                  </div>
                </div>
              </div>

              <div className="inspo-flex_card-overlay"></div>
            </a>
          </div>

          {/* eighth */}

          <div className="inspo-flex-item">
            <a className="inspo-flex_card w-inline-block">
              <div className="inspo-flex_desktop">
                <div className="inspo-flex_aspect-desktop">
                  <div className="Image_src">
                    <Image src={eighth} width={4095} height={3300} />
                  </div>
                </div>
              </div>

              <div className="inspo-flex_card-overlay"></div>
            </a>
          </div>
        </div>
      </div>
    </motion>
  );
};
export default Gallery;
