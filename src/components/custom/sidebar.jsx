import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="h-full sm:h-[105vh] flex flex-col items-center justify-between pb-2">
      <div className="flex flex-col items-center justify-between h-[25rem]">
        {/* category */}
        <div>
          <Image
            src="/category.svg"
            alt="category"
            width={24}
            height={24}
            priority
          />
        </div>

        {/* trend-up2 */}
        <div>
          <Image
            src="/trend-up2.svg"
            alt="trend-up2"
            width={24}
            height={24}
            priority
          />
        </div>

        {/* profile-2user */}
        <div>
          <Image
            src="/profile-2user.svg"
            alt="profile-2user"
            width={24}
            height={24}
            priority
          />
        </div>

        {/* box */}
        <div>
          <Image src="/box.svg" alt="box" width={24} height={24} priority />
        </div>

        {/* discount-shape */}
        <div>
          <Image
            src="/discount-shape.svg"
            alt="discount-shape"
            width={24}
            height={24}
            priority
          />
        </div>

        {/* info-circle */}
        <div>
          <Image
            src="/info-circle.svg"
            alt="info-circle"
            width={24}
            height={24}
            priority
          />
        </div>

        {/* dark/light mode */}
        <div className="flex flex-col items-center justify-between bg-white w-[46px] h-[92px] rounded-full p-2">
          {/* brightness */}
          <div className="bg-emerald-400  h-[30px] w-[30px] rounded-full flex items-center justify-center">
            <Image
              src="/brightness.svg"
              alt="brightness"
              width={16}
              height={16}
              priority
            />
          </div>

          {/* moon */}
          <div>
            <Image src="/moon.svg" alt="moon" width={24} height={24} priority />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between h-[8rem]">
        {/* arrow-right */}
        <div>
          <Image
            src="/arrow-right.svg"
            alt="arrow-right"
            width={24}
            height={24}
            priority
          />
        </div>

        {/* settings-2 */}
        <div>
          <Image
            src="/setting-2.svg"
            alt="settings-2"
            width={24}
            height={24}
            priority
          />
        </div>

        {/* logout */}
        <div>
          <Image
            src="/logout.svg"
            alt="logout"
            width={24}
            height={24}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
