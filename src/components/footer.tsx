import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="mt-8 bg-gray-50 w-full">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-3 items-start p-4 text-xs md:text-sm">
          <div className="flex justify-center lg:justify-start w-full mb-0">
            © {new Date().getFullYear()} FotoSync. All rights reserved.
          </div>
          <div className="flex justify-center w-full">
            &nbsp;Made with {"<3"} by&nbsp;
            <Link href={"https://tayyab.dev"} className="underline">
              tayyab.dev
            </Link>
            &nbsp;and&nbsp;
            <Link
              href={"https://github.com/haziqali86"}
              target={"_blank"}
              rel={"noopener noreferrer"}
              className="underline"
            >
              Haziq Ali
            </Link>
            .
          </div>
          <div className="flex lg:justify-end justify-center w-full">
            <Link
              href={"https://github.com/tayyabgoose/fotosync"}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              <FaGithub />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
