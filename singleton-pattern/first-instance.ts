import logger from "./singleton";

export default function logFirstImplementation() {
  logger.printLogCount();
  logger.log("First File");
  logger.printLogCount();
}
