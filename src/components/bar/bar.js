import { useEffect, useRef, useState } from "react";
import ProgressBar from "../progressBar/progressBar";
import * as S from "./bar.style";

export function BarMusic({ bef, currentTrack }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoop, setIsLoop] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(100);
  const audioRef = useRef(null);

  useEffect(() => {
    setIsPlaying(true);
  }, [currentTrack]);

  const handleStart = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handleStop = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const handleLoop = () => {
    setIsLoop((i) => !i);
  };

  const handleVolumeChange = (event) => {
    const shiftVolume = event.target.value;
    setVolume(shiftVolume);
    audioRef.current.volume = shiftVolume / 100;
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };

  const handleSeekTrackTime = (e) => {
    audioRef.current.currentTime = e.target.value;
    setCurrentTime(e.target.value);
  };

  const togglePlay = isPlaying ? handleStop : handleStart;

  return (
    <S.Bar>
      <audio
        autoPlay
        loop={isLoop}
        src={currentTrack.track_file}
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
      ></audio>
      <S.BarContent>
        <ProgressBar
          duration={duration}
          currentTime={currentTime}
          handleSeekTrackTime={handleSeekTrackTime}
        />

        <S.BarPlayerBlock>
          <S.BarPlayer>
            <S.PlayerControls>
              <S.PlayerBtnPrev className="_btn">
                <S.PlayerBtnPrevSvg alt="prev" onClick={() => alert("Еще не реализовано")}>
                  <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                </S.PlayerBtnPrevSvg>
              </S.PlayerBtnPrev>
              <S.PlayerBtnPlay onClick={togglePlay} className="_btn">
                {isPlaying ? (
                  <S.PlayerBtnPlaySvg alt="play">
                    <use xlinkHref="img/icon/sprite.svg#icon-pause"></use>
                  </S.PlayerBtnPlaySvg>
                ) : (
                  <S.PlayerBtnPlaySvg alt="play">
                    <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                  </S.PlayerBtnPlaySvg>
                )}
              </S.PlayerBtnPlay>
              <S.PlayerBtnNext className="_btn">
                <S.PlayerBtnNextSvg alt="next" onClick={() => alert("Еще не реализовано")}>
                  <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                </S.PlayerBtnNextSvg>
              </S.PlayerBtnNext>
              <S.PlayerBtnRepeat onClick={handleLoop} className="_btn-icon">
                <S.PlayerBtnRepeatSvg isLoop={isLoop} alt="repeat">
                  {isLoop ? (
                    <use xlinkHref="img/icon/sprite.svg#icon-repeat-active"></use>
                  ) : (
                    <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                  )}
                </S.PlayerBtnRepeatSvg>
              </S.PlayerBtnRepeat>
              <S.PlayerBtnShuffle className="_btn-icon">
                <S.PlayerBtnShuffleSvg alt="shuffle" onClick={() => alert("Еще не реализовано")}>
                  <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                </S.PlayerBtnShuffleSvg>
              </S.PlayerBtnShuffle>
            </S.PlayerControls>

            <S.PlayerTrackPlay>
              <S.TrackPlayContain>
                {bef ? (
                  <S.TrackImgBarSceleton></S.TrackImgBarSceleton>
                ) : (
                  <S.TrackPlayImage>
                    <S.TrackPlaySvg alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </S.TrackPlaySvg>
                  </S.TrackPlayImage>
                )}
                <S.TrackPlayName>
                  {bef ? (
                    <S.TrackNameBarSceleton></S.TrackNameBarSceleton>
                  ) : (
                    <S.TrackPlayNameLink href="http://">
                      {currentTrack.name}
                    </S.TrackPlayNameLink>
                  )}
                </S.TrackPlayName>
                <S.TrackPlayAuthor>
                  {bef ? (
                    <S.TrackAuthorBarSceleton></S.TrackAuthorBarSceleton>
                  ) : (
                    <S.TrackPlayAuthorLink href="http://">
                      {currentTrack.author}
                    </S.TrackPlayAuthorLink>
                  )}
                </S.TrackPlayAuthor>
              </S.TrackPlayContain>
              <S.TrackPlayLikeDis>
                <S.TrackPlayLike>
                  <S.TrackPlayLikeSvg alt="like">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </S.TrackPlayLikeSvg>
                </S.TrackPlayLike>
                <S.TrackPlayDislike>
                  <S.TrackPlayDislikeSvg alt="dislike">
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                  </S.TrackPlayDislikeSvg>
                </S.TrackPlayDislike>
              </S.TrackPlayLikeDis>
            </S.PlayerTrackPlay>
          </S.BarPlayer>
          <S.BarVolumeBlock>
            <S.VolumeContent>
              <S.VolumeImage>
                <S.VolumeSvg alt="volume">
                  <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                </S.VolumeSvg>
              </S.VolumeImage>
              <S.VolumeProgress className="_btn">
                <S.VolumeProgressLine
                  onChange={handleVolumeChange}
                  min={0}
                  max={100}
                  className="_btn"
                  type="range"
                  name="range"
                  value={volume}
                  $progress={volume}
                />
              </S.VolumeProgress>
            </S.VolumeContent>
          </S.BarVolumeBlock>
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  );
}
